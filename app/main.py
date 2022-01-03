from typing import List, Optional
from fastapi import FastAPI

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


from .data_functions import add_tema_to_file, get_data_from_file, add_question_to_file, add_subject_to_file

app = FastAPI()

class Question_format(BaseModel):
  question: str
  answers: List[str] = []
  isDate: Optional[bool] = False

class Question_request(BaseModel):
  subject_name: str
  tema: str
  question: Question_format
  
class Tema_request(BaseModel):
  subject_name: str
  tema: str
  numero: int

class Subject_request(BaseModel):
  subject_name: str

origins = [
    "http://localhost",
    "http://localhost:3000",

    "http://localhost:8000", 
    "http://127.0.0.1:8000",
    "https://school-study-a01d2.web.app",
    "https://estudia-ebau.web.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/data")
async def get_data():
  data = get_data_from_file() 
  return data

@app.post("/data")
async def add_question(question_request: Question_request):
  if len(question_request.question.answers) != 3: return {"Error": "Not valid length"}
  print(question_request.dict())
  response = add_question_to_file(question_request.dict())
  return response


@app.post("/add")
def add_new_tema(tema_request: Tema_request):
  response = add_tema_to_file(tema_request.dict())
  return response

@app.post("/add-subject")
def add_new_subject(subject_request: Subject_request):
  print("Trying to add new subject")
  response = add_subject_to_file(subject_request.dict())
  return response

@app.get("/email")
def get_email():
  return {"email": "jurkovs23@gmail.com"}