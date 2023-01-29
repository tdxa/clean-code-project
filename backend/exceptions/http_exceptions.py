from fastapi import HTTPException, status


class InvalidCredentialsException(HTTPException):
    def __init__(self) -> None:
        super().__init__(
            status.HTTP_401_UNAUTHORIZED,
            "Could not validate credentials",
            {"WWW-Authenticate": "Bearer"},
        )


class UsernameConflictException(HTTPException):
    def __init__(self) -> None:
        super().__init__(
            status.HTTP_409_CONFLICT, "The user with specified username already exists"
        )


class RecipeNotFoundException(HTTPException):
    def __init__(self, message: str) -> None:
        super().__init__(status.HTTP_404_NOT_FOUND, message)


class IncorrectParametersException(HTTPException):
    def __init__(self) -> None:
        super().__init__(status.HTTP_400_BAD_REQUEST, "Incorrect parameters provided")
