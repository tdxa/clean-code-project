from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from backend.core.auth import Auth
from backend.core.config import settings
from backend.database import database
from backend.models.token_model import Token
from backend.models.user_model import User, UserCreate


auth = Auth()
router = APIRouter()
users_collection = database.users


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')


@router.post('/token', response_model=Token)
async def login_for_access_token(request: OAuth2PasswordRequestForm = Depends()):
    user = users_collection.find_one({'username': request.username})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    if not auth.verify_password(request.password, user['password']):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.encode_token(
        data={'sub': user['username']}, expires_delta=access_token_expires
    )
    return {'access_token': access_token, 'token_type': 'bearer'}


def get_current_user(token: str = Depends(oauth2_scheme)):
    token_data = auth.decode_token(token)
    user = users_collection.find_one({'username': token_data.username})
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Could not validate credentials',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    return current_user


@router.get('/users/me/', response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@router.get('/test-secured')
async def test_secured(current_user: User = Depends(get_current_active_user)):
    return {
        'Securent content': f"secured_content accesed as {current_user['username']}"
    }


@router.post('/register', response_model=User)
async def create_user(request: UserCreate):
    if users_collection.find_one({'username': request.username}) is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail='The user with specified username already exists',
        )
    hashed_password = auth.encode_password(request.password)
    user = jsonable_encoder(request)
    user['password'] = hashed_password
    users_collection.insert_one(user)
    return user
