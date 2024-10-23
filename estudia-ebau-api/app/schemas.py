from typing import List, Optional
from pydantic import BaseModel
from pydantic.networks import EmailStr


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

class Email(BaseModel):
  email: EmailStr

class Token(BaseModel):
  access_token: str
  token_type: str

class TokenData(BaseModel):
  id: Optional[str] = None

class User(BaseModel):
  username: str
  email: EmailStr

class Image(BaseModel):
  img: str
  subject_name: str