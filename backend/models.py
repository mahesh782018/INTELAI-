from database import db


class Contact(db.Model):
    __tablename__ = "contact_enquiries"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    course = db.Column(db.String(100))
    message = db.Column(db.Text)


class Admission(db.Model):
    __tablename__ = "admissions"

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100))
    email = db.Column(db.String(100))
    mobile = db.Column(db.String(20))
    dob = db.Column(db.Date)
    course = db.Column(db.String(100))
    qualification = db.Column(db.String(100))
    batch = db.Column(db.String(100))
    address = db.Column(db.Text)
    resume = db.Column(db.String(255))