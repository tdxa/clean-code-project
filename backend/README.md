# Developer information

This file contains developer information for the repository.

## Python

Python part of the code shall follow those base guidelines:

- is compatible with Python version 3.10,

### Library dependencies

Project is using [Poetry](https://python-poetry.org/) to manage dependencies and building package.

To install Poetry on your system follow the guide here: [Poetry Installation](https://python-poetry.org/docs/#installation)

If you want to have virtualenv created in `.venv` folder in repository root, configure Poetry with following command:

```
poetry config virtualenvs.in-project true
```

To create a venv and install all dependencies:

```
poetry install
```

To activate virtual env:

```
source .venv/bin/activate 
or
.venv\Scripts\activate
```

To add a production dependency:

```
poetry add <dependency name>
```

To add a development dependency (like one used by tests):

```
poetry add -D <dependency name>
```

To run python application:

```
python main.py
```
