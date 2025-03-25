from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm

# from ..database import get_db
from .schemas import Token

# from .utils import verify
from .oauth2 import create_access_token
from .config import settings

router = APIRouter(tags=["Authentication"])


@router.post("/login", response_model=Token)
def login(
    user_credentials: OAuth2PasswordRequestForm = Depends(),
):  # , db: Session = Depends(get_db)
    print("Login:", user_credentials)
    # user = db.query(Users).filter(Users.email == user_credentials.username).first()

    if (
        user_credentials.username in settings.admin_email
        and user_credentials.password == settings.my_password
    ):
        access_token = create_access_token(
            data={"user_email": user_credentials.username}
        )
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials"
        )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials"
        )

    if not verify(user_credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials"
        )

    # create a token
    access_token = create_access_token(data={"user_id": user.id})

    return {"access_token": access_token, "token_type": "bearer"}
