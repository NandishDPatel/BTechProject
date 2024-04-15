customers = document.getElementById("countCust");
events = document.getElementById("countEvent");
awards = document.getElementById("countAward");
if (customers){
  c = 0;
  c1 = setInterval(() => {
    c = c+1;
    customers.innerHTML = c;
    if (c == 432) {
      clearInterval(c1);
    }
  }, 20);
}
if(events){
  e = 0;
  e1 = setInterval(() => {
    e = e+1;
    events.innerHTML = e;
    if (e == 130) {
      clearInterval(e1);
    }
  }, 50);
}
if(awards){
  a = 0;
  a1 = setInterval(() => {
    a = a+1;
    awards.innerHTML = a;
    if (a == 38) {
      clearInterval(a1);
    }
  }, 200);
}







var banners = [
  "images/home_page/banner1.jpg",
  "images/home_page/banner2.jpg",
  "images/home_page/banner4.jpg",
];
var start = 0;
function imgSlider() {
  if (start < banners.length) {
    start = start + 1;
  } else {
    start = 1;
  }
  var imgTag = document.getElementById("img1");
  if(imgTag){
    imgTag.src = banners[start - 1];
  }

}
setInterval(imgSlider, 2000);

var sE1 = document.getElementById("sInEye1");
var sE2 = document.getElementById("sInEye2");
var sInPass = document.getElementById("siPas");
sE2.style.display = "none";
function showE1() {
  sE1.style.display = "none";
  sE2.style.display = "block";
  sInPass.type = "text";
}
function showE2() {
  sE1.style.display = "block";
  sE2.style.display = "none";
  sInPass.type = "password";
}

const sInForm = document.querySelector(".sIn");
var sIninp = document.querySelectorAll(".sIn input");

function loginClk(lgId) {
  if (sIninp[0].value !== "" && sIninp[1].value !== "") {
    alert("User has successfully signed In!");
    sIninp[0].value = "";
    sIninp[1].value = "";
    sInForm.style.display = "none";
  } else {
    alert("Please enter both the fields");
  }
}

//============Sign Up Form=====================
var sUE1 = document.getElementById("sUpEye1");
var sUE2 = document.getElementById("sUpEye2");
var sUCr1 = document.getElementById("sUpCrEye1");
var sUCr2 = document.getElementById("sUpCrEye2");

const pass = document.getElementById("supPass");
const cnfpass = document.getElementById("supCnfPass");

sUE1.style.display = "none";
sUE2.style.display = "none";
sUCr1.style.display = "block";
sUCr2.style.display = "block";
function eyeClckd1() {
  if (sUE1.style.display == "block") {
    sUE1.style.display = "none";
    sUCr1.style.display = "block";
    pass.type = "text";
  } else {
    sUE1.style.display = "block";
    sUCr1.style.display = "none";
    pass.type = "password";
  }
}
function eyeClckd2() {
  if (sUE2.style.display == "block") {
    sUE2.style.display = "none";
    sUCr2.style.display = "block";
    cnfpass.type = "text";
  } else {
    sUE2.style.display = "block";
    sUCr2.style.display = "none";
    cnfpass.type = "password";
  }
}
const sUpForm = document.querySelector(".sUp");
const sUpBtn = document.getElementById("sUpBtn");
var nm = document.getElementById("supNm");
var em = document.getElementById("supEm");
function sUClk() {
  if (pass.value === cnfpass.value) {
    if (nm.value != "" && em.value != "") {
      alert("User has Successfully created the account!");
      nm.value = "";
      em.value = "";
      pass.value = "";
      cnfpass.value = "";
      sUpForm.style.display = "none";
    } else {
      alert("Please enter all the fields!");
    }
  } else {
    alert("Password and Confirm Password does not match !!");
  }
}

// closing the Sign In/Sign Up form
function closeClk(clId) {
  clId.style.display = "none";
}

// showing the sign in- sign up form
var sign1 = document.getElementById("signIn1");
var sign2 = document.getElementById("signUp1");
var x1 = document.getElementById('signInButton');
var x2 = document.getElementById('signUpButton');
x1.addEventListener("click", () => {
  sign1.style.display = "block";
  sign2.style.display = "none";
})
x2.addEventListener("click", () => {
  sign2.style.display = "block";
  sign1.style.display = "none";
})
