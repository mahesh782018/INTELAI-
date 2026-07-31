class Config:
    SECRET_KEY = "intelai_secret_key"

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:Welcome@localhost/intelai_db"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    UPLOAD_FOLDER = "uploads"