// ============================================
// INTELAI Solutions Private Limited
// popup.js
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // Create Popup

    const popup = document.createElement("div");

    popup.id = "admissionPopup";

    popup.innerHTML = `

    <div class="popup-content">

        <span class="close-popup">&times;</span>

        <h2>🎓 Admissions Open 2026</h2>

        <p>

        Join <strong>INTELAI Solutions Private Limited</strong>

        </p>

        <hr>

        <p>✔ Python Full Stack</p>
        <p>✔ Java Full Stack</p>
        <p>✔ MERN Stack</p>
        <p>✔ Data Analytics</p>
        <p>✔ Data Science</p>
        <p>✔ Artificial Intelligence</p>
        <p>✔ Machine Learning</p>
        <p>✔ Cyber Security</p>
        <p>✔ AWS Cloud Computing</p>
        <p>✔ CCNA Networking</p>

        <br>

        <h3 style="color:#0d6efd;">100% Placement Assistance</h3>

        <br>

        <a href="admissions.html" class="popup-btn">

            Apply Now

        </a>

    </div>

    `;

    document.body.appendChild(popup);

    // Popup Styles

    const style = document.createElement("style");

    style.innerHTML = `

#admissionPopup{

position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.65);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;

}

.popup-content{

background:#fff;
padding:35px;
width:420px;
max-width:90%;
border-radius:10px;
text-align:center;
position:relative;
box-shadow:0 10px 30px rgba(0,0,0,.3);
animation:popupShow .5s;

}

.popup-content h2{

color:#0d6efd;
margin-bottom:15px;

}

.popup-content p{

margin:8px 0;

}

.popup-btn{

display:inline-block;
margin-top:15px;
padding:12px 25px;
background:#0d6efd;
color:#fff;
text-decoration:none;
border-radius:5px;
font-weight:bold;
transition:.3s;

}

.popup-btn:hover{

background:#084298;

}

.close-popup{

position:absolute;
right:15px;
top:10px;
font-size:28px;
cursor:pointer;
color:red;

}

@keyframes popupShow{

from{

transform:scale(.5);
opacity:0;

}

to{

transform:scale(1);
opacity:1;

}

}

`;

    document.head.appendChild(style);

    // Close Popup

    const closeBtn = popup.querySelector(".close-popup");

    closeBtn.addEventListener("click", function () {

        popup.style.display = "none";

    });

    // Auto Close after 20 Seconds

    setTimeout(function () {

        popup.style.display = "none";

    }, 20000);

});