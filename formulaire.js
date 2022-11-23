const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const Genre = document.getElementsByName("M");
const Group = document.getElementsByName("origin");
const mis1 = document.querySelector(".mis1");
const mis2 = document.querySelector(".mis2");
const button= document.querySelector('.btn');
let arr =[];
form.addEventListener("submit", (e) => {
  checkInputs();
  if(arr.length != 7) e.preventDefault();

});
function validatefname(fname) {
  if (fname.value.trim() === "") {
    setErrorFor(fname, "First name is required");
  } else if ((fname.value.length < 3) || (fname.value.length > 30)) {
    setErrorFor(fname, "First name is invalid");
  } else {
    setSuccessFor(fname, "Looks Good!");
  }
}
function validatelname(lname) {
  if (lname.value.trim() === "") {
    setErrorFor(lname, "Last name is required");
  } else if ((lname.value.length < 3) || (lname.value.length > 30)) {
    setErrorFor(lname, "Last name is invalid");
  } else {
    setSuccessFor(lname, "Looks Good!");
  }
}
function validateemail(ema) {
  if (ema.value.trim() === "") {
    setErrorFor(ema, "Email  is required");
  } else if (ema.value.match(/^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/g)) {
    setSuccessFor(ema, "Looks Good!");
  } else {
    setErrorFor(ema, "Email is invalid");
  }
}
function validatephone(phone) {
  if (phone.value.trim() === "") {
    setErrorFor(phone, "Phone number  is required");
  } else if (
    phone.value.match(
      /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/
    )
  ) {
    setSuccessFor(phone, "Looks Good!");
  } else {
    setErrorFor(phone, "Phone number is invalid");
  }
}
firstname.addEventListener("keyup", function () {
  validatefname(firstname);
});
lastname.addEventListener("keyup", function () {
  validatelname(lastname);
});
email.addEventListener("keyup", function () {
  validateemail(email);
});
phonenumber.addEventListener("keyup", function () {
  validatephone(phonenumber);
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phonenumberValue = phonenumber.value.trim();
    if (firstnameValue === "") {
      setErrorFor(firstname, "First name is required");
    } else if ((firstnameValue.length < 3) || (firstnameValue.length > 30)) {
      setErrorFor(firstname, "First name is invalid");
    } else {
      setSuccessFor(firstname, "Looks Good!");
      arr.push(true)
    }
    if (lastnameValue === "") {
      setErrorFor(lastname, "Last name is required");
    } else if ((lastnameValue.length < 3) || (lastnameValue.length > 30)) {
      setErrorFor(lastname, "Last name is invalid");
    } else {
      setSuccessFor(lastname, "Looks Good!");
      arr.push(true)

    }
  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email, "Looks Good!");
    arr.push(true)
  }
  if (phonenumberValue === "") {
    setErrorFor(phonenumber, "Phone number is required");
  } else if (!isPhonenumber(phonenumberValue)) {
    setErrorFor(phonenumber, "Not a valid phone number");
  } else {
    setSuccessFor(phonenumber, "Looks Good!");
    arr.push(true)
  }
  var gen = !Genre[0].checked && !Genre[1].checked && !Genre[2].checked;
  if (gen) {
    mis1.innerHTML = "Choose one";
    mis1.style.color = "red";
  } else {
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    arr.push(true)
  }
  var grp =
    !Group[0].checked &&
    !Group[1].checked &&
    !Group[2].checked &&
    !Group[3].checked &&
    !Group[4].checked;
  if (grp) {
    mis2.innerHTML = "Choose one";
    mis2.style.color = "red";
  } else {
    mis2.innerHTML = "Looks good!";
    mis2.style.color = "green";
    arr.push(true)
  }
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let marked_checkboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      text.innerHTML = `Good`;
      text.style.color = "green";
      marked_checkboxes.push(check_box);
    }
  });
  if (marked_checkboxes.length >= 1 && marked_checkboxes.length <= 3) {
    text.innerHTML = `Good`;
      text.style.color = "green";
      arr.push(true)
  } else {
    text.innerHTML = "Choose between 1 and 3";
    text.style.color = "red";
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}
function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const samp = formControl.querySelector("samp");
  formControl.className = "form-control success";
  samp.innerText = message;
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/.test(email);
}
function isPhonenumber(phonenumber) {
  var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
  return phoneRe.test(phonenumber);
}
function validate() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let marked_checkboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      text.innerHTML = `Good`;
      text.style.color = "green";
      marked_checkboxes.push(check_box);
    }
  });
  if (marked_checkboxes.length >= 1 && marked_checkboxes.length <= 3) {
    text.innerHTML = `Good`;
      text.style.color = "green";
  } else {
    text.innerHTML = "Must select a minimum of 1 options to proceed";
    text.style.color = "red";
  }
}
var index = 0;
change();

function change() {
    var x = document.getElementsByClassName('slides');
    for(var i = 0; i < x.length; i++) { 
        x[i].style.display = "none"; 
    }
    index++;

    if(index > x.length) { 
        index = 1; 
    }
    x[index - 1].style.display = "block";
    setTimeout(change, 3000);
}
