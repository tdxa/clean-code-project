FROM python:3.10

RUN python -m pip install poetry==1.1.15 && poetry config virtualenvs.in-project true
COPY poetry.lock /poetry.lock
COPY pyproject-1.1.15.toml /pyproject.toml
RUN poetry install --no-root
COPY . ./

ENV PATH="/.venv/bin:${PATH}"
EXPOSE 8000
ENTRYPOINT [ "python", "main.py" ]
