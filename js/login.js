  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBArcberrOpO6IjpoyfQLeQsICCQQK1BZ8",
    authDomain: "login-basic-99280.firebaseapp.com",
    projectId: "login-basic-99280",
    storageBucket: "login-basic-99280.appspot.com",
    messagingSenderId: "972764072540",
    appId: "1:972764072540:web:8026011b3a775c92a5b499",
    measurementId: "G-ECN858RGRF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function copyrightHide() {
  copyright = document.getElementById("copyright");
  copyright.style.visibility = "hidden";
}

function copyrightShow() {
  copyright = document.getElementById("copyright");
  copyright.style.visibility = "visible";
}

function forbid() {
  var nomen = document.getElementById("nomen");
  var namae = document.getElementById("namae");
  var ipHolder = document.getElementById("ipHolder");
  var folder = nomen.value[0];
  console.log(folder);
}

function register() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  //encrypt password here
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  
  promise.catch(e => alert(e.message));
  alert("Account registered.");
}

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  //encrypt password here
  const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(function() {
    let loginMessage = document.getElementById("loginMessage");
    loginMessage.textContent = email.value;
    copyrightShow();
  }).catch(function(error) {
    alert(error.message);
  });
}

function logout() {
  var email = document.getElementById("email");
  auth.signOut().catch(function (error) { 
    alert(error.message);
  });
  copyrightHide();
  loginMessage.textContent = "";
}