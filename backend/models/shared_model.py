from bson import ObjectId


class PyObjectId(ObjectId):
    """
    Model class for ObjectId
    """

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid format of ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class CommonQueryParams:
    """
    Model for pagination query parameters
    """
    def __init__(self, page: int = 1, size: int = 10) -> None:
        self.page = page
        self.size = size
