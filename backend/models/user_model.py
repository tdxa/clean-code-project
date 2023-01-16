from typing import Union

from pydantic import BaseModel


class User(BaseModel):
    username: str
    email: str
    first_name: Union[str, None] = None
    last_name: Union[str, None] = None


class UserCreate(User):
    password: str


class UserInDB(User):
    hashed_password: str
