from pydantic import BaseModel


class User(BaseModel):
    """
    Model class for representing a base user
    """
    username: str
    email: str
    first_name: str | None = None
    last_name: str | None = None


class UserCreate(User):
    """
    Model class for creating new user
    """
    password: str


class UserInDB(User):
    """
    Model class for representing user stored in database
    """
    hashed_password: str
