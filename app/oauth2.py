from fastapi import Depends, status, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from .config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

def create_access_token(data: dict):  # email
  to_encode = data.copy()
  print(to_encode)

  expire = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXPIRE_MINUTES)
  to_encode.update({"exp": expire})
  print(to_encode)
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt




def verify_access_token(token:str, credentials_exception):
  try:
    print("Verifying token")
    payload = jwt.decode(token=token, key=SECRET_KEY, algorithms=ALGORITHM)
    print(payload)
    email: str = payload.get("user_email")

    if not email: raise credentials_exception
    # else: return payload
    # token_data = TokenData(id=id)
    return {"user_email": email}
  except JWTError:
    raise credentials_exception

  

def get_current_user(token: str= Depends(oauth2_scheme)): #
  print("getting current user")
  credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})

  user_jwt = verify_access_token(token, credentials_exception)
  print("User: ", user_jwt)
  # user = db.query(models.Users).filter(models.Users.id == token_data.id).first()

  return  user_jwt