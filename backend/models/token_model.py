from pydantic import BaseModel


class Token(BaseModel):
    """
    Model for representing a JWT token.
    """

    access_token: str
    token_type: str


class TokenData(BaseModel):
    """
    Model for representing data inside JWT token
    """

    username: str | None = None
