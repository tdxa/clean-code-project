from typing import Optional
from models.pagination_model import PaginationContent
from pymongo.collection import Collection
from exceptions import IncorrectParametersException


def paginate_content(
    collection: Collection, page: int, size: int, filter: Optional[dict] = None
) -> PaginationContent:
    """
    Method for creating simple pagination model
    Args:
        collection (Collection): Collection to paginate
        page (int): page number
        size (int): page size
        filter (Optional[dict], optional): Filter to apply on collection

    Returns:
        PaginationContent: Paginated response 
    """
    if size <= 0 or page < 0:
        raise IncorrectParametersException
    filter = filter or {}
    start = (page - 1) * size
    total = collection.count_documents(filter)
    content = list(collection.find(filter).skip(start).limit(size))
    return PaginationContent(page=page, content=content, size=size, total_count=total)
