
import os

class Config:

    SECRET_KEY = os.getenv("SECRET_KEY", "intelai_secret_key")

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{os.getenv('MYSQLUSER')}:"
        f"{os.getenv('MYSQLPASSWORD')}@"
        f"{os.getenv('MYSQLHOST')}:"
        f"{os.getenv('MYSQLPORT')}/"
        f"{os.getenv('MYSQLDATABASE')}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    UPLOAD_FOLDER = "uploads"