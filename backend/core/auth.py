from datetime import datetime, timedelta
from typing import Union

from jose import jwt, JWTError
from passlib.context import CryptContext

from backend.core.config import settings
from backend.exceptions import InvalidCredentialsException
from backend.models.token_model import TokenData


class Auth:
    """
    Class responsible for handling auth operations
    """

    def __init__(self) -> None:
        """
        Initializes CryptContext usign bcrypt scheme
        """
        self.pwd_context = CryptContext(schemes=['bcrypt'])

    def encode_password(self, password: str) -> str:
        """
        Encodes provided plaintext to hash

        Args:
            password (str): plaintext

        Returns:
            str: hashed password
        """
        return self.pwd_context.hash(password)

    def verify_password(self, password: str, encoded_password: str) -> bool:
        """
        Verifies the provided plaintext password against the encrypted password.
        Args:
            password (str): plaintext password to verify
            encoded_password (str): encrypted password
        Returns:
            bool: True if the password is valid, False otherwise
        """
        return self.pwd_context.verify(password, encoded_password)

    def encode_token(
        self, data: dict, expires_delta: Union[timedelta, None] = None
    ) -> str:
        """
        Encodes a JWT token with given data and expiration time
        Args:
            data (dict): data to be encoded in the token
            expires_delta (timedelta): time until the token expires. If not provided, default to 30 minutes

        Returns:
            str: Encoded JWT token
        """
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(
                minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
            )
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(
            to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM
        )
        return encoded_jwt

    def decode_token(self, token: str) -> TokenData:
        """
        Verifies and decodes a JWT token

        Args:
            token (str): The JWT token to decode and validate

        Returns:
            TokenData: Decoded token content
        """
        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
            )
            username: str = payload.get('sub')
            if username is None:
                raise InvalidCredentialsException

            return TokenData(username=username)
        except JWTError:
            raise InvalidCredentialsException
