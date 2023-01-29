import pytest
from models.shared_model import PyObjectId


def test_init():
    py_id = PyObjectId()
    assert isinstance(py_id, PyObjectId)


def test_init_raise():
    with pytest.raises(Exception):
        PyObjectId("not valid value")
