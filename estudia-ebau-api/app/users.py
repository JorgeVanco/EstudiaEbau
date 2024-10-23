from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from .database import get_db
from .schemas import User
from . import models

router = APIRouter(tags=["Users"])

@router.post("/users")
def add_user(user : User, db: Session = Depends(get_db)):
  user_by_username = db.query(models.Users).filter(models.Users.username == user.username).first()
  if user_by_username:
    if user_by_username.email != user.email:
      return {"Error": "Username already exists"}
  new_user = models.Users(**user.dict())
  db.add(new_user)
  db.commit()
  db.refresh(new_user) 
  return new_user

@router.put("/users")
def update_user(user: User, db: Session = Depends(get_db)):
  print("jerj")

  user_query = db.query(models.Users).filter(models.Users.email == user.email)
  user_by_username = db.query(models.Users).filter(models.Users.username == user.username).first()
  if user_by_username:
    if user_by_username.email != user.email: 
      return {"Error": "Username already exists"}

  user_to_update = user_query.first()


  if user_to_update == None: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with email: {user.email} does not exist")


  user_query.update(user.dict(), synchronize_session=False)
  try:
    db.commit()
  except IntegrityError:
    db.rollback()
 
  return user_query.first()

@router.get("/users")
def get_users(db: Session = Depends(get_db)):
  return db.query(models.Users).all()