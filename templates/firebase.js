const firebaseConfig = {
  apiKey: "AIzaSyBq40mNsVG8cV4Us1KC1vazugvZ_8SXIz4",
  authDomain: "analysis-573d0.firebaseapp.com",
  databaseURL: "https://analysis-573d0-default-rtdb.firebaseio.com",
  projectId: "analysis-573d0",
  storageBucket: "analysis-573d0.appspot.com",
  messagingSenderId: "1028646946354",
  appId: "1:1028646946354:web:f7bc82b22782fb7b90de2b"
};

firebase.initializeApp(firebaseConfig);

var analysisdb = firebase.database().ref("analysis");

// Safe form listener
const form = document.getElementById("analysis");
if (form) {
    form.addEventListener("submit", submitform);
}

// LOGIN
function login() {
    const username = document.getElementById("email").value.trim();
    const pwd = document.getElementById("pwd").value.trim();

    if (!username || !pwd) {
        alert("Please enter Email and Password");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(username, pwd)
        .then((userCredential) => {
            alert("Login Successful");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

// REGISTER
function submitform(e) {

    if (e) e.preventDefault();

    const first_name = document.getElementById("fname").value.trim();
    const last_name = document.getElementById("lname").value.trim();
    const user_name = document.getElementById("uname").value.trim();
    const con_email = document.getElementById("email").value.trim();
    const con_phn = document.getElementById("con-ph").value.trim();
    const con_pass = document.getElementById("con-pwd").value;
    const con_cnfpass = document.getElementById("con-cnfpwd").value;

    if (!first_name || !last_name || !user_name) {
        alert("Please fill all fields");
        return;
    }

    if (con_pass !== con_cnfpass) {
        alert("Passwords do not match");
        return;
    }

    firebase.auth()
        .createUserWithEmailAndPassword(con_email, con_pass)
        .then((userCredential) => {

            saveinfo(
                first_name,
                last_name,
                user_name,
                con_email,
                con_phn,
                con_pass
            );

            alert("Registration Successful");

            document.getElementById("analysis").reset();

            window.location.href = "slog.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

function saveinfo(
    first_name,
    last_name,
    user_name,
    con_email,
    con_phn,
    con_pass
) {

    var newform = analysisdb.push();

    newform.set({
        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        con_email: con_email,
        con_phn: con_phn,
        con_pass: con_pass
    });
}