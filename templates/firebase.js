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

document.getElementById("analysis").addEventListener("submit", submitform);

function login() {
  const username = document.getElementById("email").value.trim();
  const pwd = document.getElementById("pwd").value.trim();

  if (!username || !pwd) {
    alert("Please enter both email and password.");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(username, pwd)
    .then((userCredential) => {
      console.log("Login Successful: ", userCredential.user.email);
      window.location.href = "form.html";
    })
    .catch((error) => {
      console.error("Login Error: ", error.code, error.message);
      alert(error.message);
    });
}

function submitform(e) {
  e.preventDefault();
  
  var first_name = document.getElementById("fname").value.trim();
  var last_name = document.getElementById("lname").value.trim();
  var user_name = document.getElementById("uname").value.trim();
  var con_email = document.getElementById("email").value.trim();
  var con_phn = document.getElementById("con-ph").value.trim();
  var con_pass = document.getElementById("con-pwd").value;
  var con_cnfpass = document.getElementById("con-cnfpwd").value;
  
  if (!first_name) {
    alert("Please enter First name!");
    return;
  }
  if (!last_name) {
    alert("Please enter Last name!");
    return;
  }
  if (!user_name) {
    alert("Please enter Username!");
    return;
  }
  if (!con_email || !con_email.includes("@")) {
    alert("Please enter a valid email address!");
    return;
  }
  if (!con_phn || isNaN(con_phn) || con_phn.length < 10) {
    alert("Please enter a valid phone number!");
    return;
  }
  if (con_pass !== con_cnfpass) {
    alert("Passwords do not match!");
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(con_email, con_pass)
    .then((userCredential) => {
      console.log("User Registered: ", userCredential.user.email);
      saveinfo(first_name, last_name, user_name, con_email, con_phn, con_pass);
      document.getElementById("analysis").reset();
      window.location.href = "slog.html";
    })
    .catch((error) => {
      console.error("Signup Error: ", error.code, error.message);
      alert(error.message);
    });
}

const saveinfo = (first_name, last_name, user_name, con_email, con_phn, con_pass) => {
  var newform = analysisdb.push();
  newform.set({
    first_name: first_name,
    last_name: last_name,
    user_name: user_name,
    con_email: con_email,
    con_phn: con_phn,
    con_pass: con_pass
  });
};
