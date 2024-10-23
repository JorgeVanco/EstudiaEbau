from sqlalchemy.sql.expression import  text
from sqlalchemy.sql.sqltypes import TIMESTAMP, String
from .database import Base
from sqlalchemy import Column, Integer

class Users(Base):
  __tablename__ = "users_api"
  id = Column(Integer, primary_key=True, nullable=False)
  email = Column(String, nullable=False, unique=True)
  username = Column(String, nullable=False, unique=True)
  created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))