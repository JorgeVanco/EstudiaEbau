from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    admin_email: str
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int
    my_password: str
    database_hostname: str
    database_port: str
    database_password: str
    database_name: str
    database_username: str

    class Config:
        env_file = ".env"


settings = Settings()
