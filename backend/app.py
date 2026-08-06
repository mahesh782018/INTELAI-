from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

from config import Config
from database import db
from models import Contact, Admission

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return {
        "status": "success",
        "message": "INTELAI Backend Running Successfully"
    }


@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    enquiry = Contact(
        name=data.get("name"),
        email=data.get("email"),
        phone=data.get("phone"),
        course=data.get("course"),
        message=data.get("message")
    )

    db.session.add(enquiry)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Enquiry submitted successfully"
    })


@app.route("/admission", methods=["POST"])
def admission():

    data = request.form

    resume_file = request.files.get("resume")
    resume_filename = None

    if resume_file:
        resume_filename = resume_file.filename
        resume_file.save(f"{app.config['UPLOAD_FOLDER']}/{resume_filename}")

    student = Admission(
        fullname=data.get("fullname"),
        email=data.get("email"),
        mobile=data.get("mobile"),
        dob=datetime.strptime(data.get("dob"), "%Y-%m-%d").date(),
        course=data.get("course"),
        qualification=data.get("qualification"),
        batch=data.get("batch"),
        address=data.get("address"),
        resume=resume_filename
    )

    db.session.add(student)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Admission submitted successfully"
    })

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)