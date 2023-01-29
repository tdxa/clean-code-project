from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth import router as user_router
from api.recipes import recipes_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(recipes_router)
