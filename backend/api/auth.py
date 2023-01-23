from datetime import timedelta

from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from core.auth import Auth
from core.config import settings
from database import database
from exceptions import InvalidCredentialsException, UsernameConflictException
from models.token_model import Token
from models.user_model import User, UserCreate


auth = Auth()
router = APIRouter()
users_collection = database.users


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')


@router.post('/token', response_model=Token)
async def login_for_access_token(request: OAuth2PasswordRequestForm = Depends()):
    """
    Login and receive access token

    Args:
        request (OAuth2PasswordRequestForm, optional): request payload containting the username and password

    Returns:
        Token:  token object containing access_token and token_type
    """
    user = users_collection.find_one({'username': request.username})
    if not (user and auth.verify_password(request.password, user['password'])):
        raise InvalidCredentialsException
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.encode_token(
        data={'sub': user['username']}, expires_delta=access_token_expires
    )
    return {'access_token': access_token, 'token_type': 'bearer'}


def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    """
    Retrieve current user details from JWT token
    
    Args:
        token (str, optional): encoded JWT token

    Returns:
        User: user details
    """
    token_data = auth.decode_token(token)
    user = users_collection.find_one({'username': token_data.username})
    if user is None:
        raise InvalidCredentialsException
    return user


@router.get('/users/current/', response_model=User)
async def read_current_user(current_user: User = Depends(get_current_user)) -> User:
    """
    Retrieves current user information
    
    Returns:
        User: user details
    """
    return current_user


@router.get('/test-secured')
async def test_secured(current_user: User = Depends(get_current_user)):
    """
    Sample endpoint for testing auth
    """
    return {
        'Securent content': f"secured_content accesed as {current_user['username']}"
    }


@router.post('/register', response_model=User)
async def create_user(request: UserCreate) -> User:
    """
    Register a new user

    Args:
        request (UserCreate): user information

    Returns:
        User: registered user details
    """
    if users_collection.find_one({'username': request.username}) is not None:
        raise UsernameConflictException

    hashed_password = auth.encode_password(request.password)
    user = jsonable_encoder(request)
    user['password'] = hashed_password
    users_collection.insert_one(user)
    return user
