from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from .oauth2 import get_current_user
from .data_functions import (
    add_tema_to_file,
    get_data_from_file,
    add_question_to_file,
    add_subject_to_file,
    add_image_to_file,
    add_changes,
)
from .config import settings
from . import schemas
from . import auth, users


app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "https://school-study-a01d2.web.app",
    "https://estudia-ebau.web.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/data")
async def get_data():
    data = get_data_from_file()
    return data


@app.post("/add-question")
async def add_question(
    question_request: schemas.Question_request,
    current_user: dict = Depends(get_current_user),
):
    if current_user["user_email"] not in settings.admin_email:
        return {"Error": "Not authorized"}
    if len(question_request.question.answers) != 3:
        return {"Error": "Not valid length"}
    print(question_request.dict())
    response = add_question_to_file(question_request.dict())
    return response


@app.post("/add-tema")
def add_new_tema(
    tema_request: schemas.Tema_request, current_user: dict = Depends(get_current_user)
):
    if current_user["user_email"] not in settings.admin_email:
        return {"Error": "Not authorized"}
    response = add_tema_to_file(tema_request.dict())
    return response


@app.post("/add-subject")
def add_new_subject(
    subject_request: schemas.Subject_request,
    current_user: dict = Depends(get_current_user),
):
    if current_user["user_email"] not in settings.admin_email:
        return {"Error": "Not authorized"}
    print("Trying to add new subject")
    response = add_subject_to_file(subject_request.dict())
    return response


@app.post("/add-questions")
def add_questions(
    subject_request: schemas.Questions_request,
    current_user: dict = Depends(get_current_user),
):
    if current_user["user_email"] not in settings.admin_email:
        return {"Error": "Not authorized"}
    print("Trying to add new questions")
    data = get_data_from_file()
    found_subject = False
    found_tema = False
    for subject in data:
        if subject["name"] == subject_request.subject_name:
            found_subject = True
            for tema in subject["temas"]:
                if tema["name"] == subject_request.tema:
                    found_tema = True
                    for question in subject_request.questions:
                        tema["questions"].append(question.dict())
            if not found_tema:
                subject["temas"].append(
                    {
                        "name": subject_request.tema,
                        "numero": len(subject["temas"]) + 1,
                        "questions": [
                            question.dict() for question in subject_request.questions
                        ],
                    }
                )
    if not found_subject:
        data.append(
            {
                "name": subject_request.subject_name,
                "temas": [
                    {
                        "name": subject_request.tema,
                        "numero": 1,
                        "questions": [
                            question.dict() for question in subject_request.questions
                        ],
                    }
                ],
            }
        )
    add_changes(data)
    response = {"message": "Questions added"}
    return response


@app.post("/email")
def get_email(email_request: schemas.Email):
    return {"isAdmin": email_request.email in settings.admin_email}


@app.post("/image")
def add_image(img: schemas.Image, current_user: dict = Depends(get_current_user)):
    if current_user["user_email"] not in settings.admin_email:
        return {"Error": "Not authorized"}
    return add_image_to_file(img)


# @app.post("/login", response_model=schemas.Token)
# def login(user_credentials: OAuth2PasswordRequestForm = Depends()):#, db: Session = Depends(get_db)
#   print("Login:", user_credentials)
#   #user = db.query(Users).filter(Users.email == user_credentials.username).first()

#   if user_credentials.username == settings.admin_email and user_credentials.password == settings.my_password:
#     access_token = create_access_token(data= {"user_email": user_credentials.username})
#     return {"access_token": access_token, "token_type": "bearer"}
#   else:
#     raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")
