from fastapi import HTTPException, status


class InvalidCredentialsException(HTTPException):
    """Raised on invalid credentials"""
    def __init__(self) -> None:
        super().__init__(
            status.HTTP_401_UNAUTHORIZED,
            "Could not validate credentials",
            {"WWW-Authenticate": "Bearer"},
        )


class UsernameConflictException(HTTPException):
    """Raised on trying to use existing user name"""
    def __init__(self) -> None:
        super().__init__(
            status.HTTP_409_CONFLICT, "The user with specified username already exists"
        )


class RecipeNotFoundException(HTTPException):
    """Raised on recipe not found"""
    def __init__(self, message: str) -> None:
        super().__init__(status.HTTP_404_NOT_FOUND, message)
