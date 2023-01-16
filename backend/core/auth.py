from datetime import datetime, timedelta
from typing import Union

from fastapi import HTTPException, status
from jose import jwt, JWTError
from passlib.context import CryptContext

from backend.core.config import settings
from backend.models.token_model import TokenData

class Auth():
    def __init__(self) -> None:
        self.pwd_context = CryptContext(schemes=['bcrypt'])
        
    def encode_password(self, password: str):
        return self.pwd_context.hash(password)

    def verify_password(self, password: str, encoded_password: str):
        return self.pwd_context.verify(password, encoded_password)

    def encode_token(self, data: dict, expires_delta: Union[timedelta, None] = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=15)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
        
        return encoded_jwt

    def decode_token(self, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
            username: str = payload.get("sub")
            if username is None:
                raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
            return TokenData(username=username)
        except JWTError:
            raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
    )
    