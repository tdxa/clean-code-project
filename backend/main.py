import uvicorn
from fastapi import FastAPI

from api.auth import router as user_router
from api.recipes import recipes_router

app = FastAPI()
app.include_router(user_router)
app.include_router(recipes_router)

if __name__ == "__main__":
    uvicorn.run("main:app")
