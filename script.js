let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let btn = document.getElementById("btn");
let validUsername = false;
let validPassword = false;
let validEmail = false;
let validPhone = false;

//VALIDATING USERNAME

username.addEventListener("blur", () => {
  regUser = /^[A-Z][0-9a-zA-Z_]{2,10}/;
  var testUsername = regUser.test(username.value);

  if (testUsername) {
    username.style.border = "2px solid green";
    showUser.innerHTML = "";
    validUsername = true;
  } else {
    username.style.border = "2px solid red";
    showUser.innerHTML = "First letter must be capital";
    validUsername = false;
    if (username.value == "") {
      showUser.innerHTML = "please enter a value";
      username.style.border = "2px solid red";
    }
  }
});

//VALIDATING EMAIL ADDRESS

email.addEventListener("blur", () => {
  regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
  var testemail = regEmail.test(email.value);
  if (testemail) {
    email.style.border = "2px solid green";
    showEmail.innerHTML = "";
    validEmail = true;
  } else {
    email.style.border = "2px solid red";
    showEmail.innerHTML = "Invalid email format";
    validEmail = false;
    if (username.value == "") {
      showUser.innerHTML = "please enter a value";
      username.style.border = "2px solid red";
    }
  }
});

//VALIDATING PASSWORD

password.addEventListener("blur", () => {
  regWeakPassword = /[a-zA-Z0-9]{5,8}/;
  regStrongPassword = /^(\.|_)[a-zA-Z0-9.-_@]{5,8}/;
  var testWeakpassword = regWeakPassword.test(password.value);
  var testStrongpassword = regStrongPassword.test(password.value);
  if (testStrongpassword) {
    password.style.border = "2px solid green";
    showPassword.innerHTML = "";
    validPassword = true;
  } else if (testWeakpassword) {
    password.style.border = "2px solid yellow";
    showPassword.innerHTML =
      "Weak password,At starting Try . or _ for secured password";
    validPassword = false;
  } else {
    password.style.border = "2px solid red";
    showPassword.innerHTML = "password must be of 7 character";
    validPassword = false;
    if (username.value == "") {
      showUser.innerHTML = "please enter a value";
      username.style.border = "2px solid red";
    }
  }
});

//VALIDATING PHONE NUMBER

phone.addEventListener("blur", () => {
  regPhone = /^(7|8|9)[0-9]{9}/;
  var testPhone = regPhone.test(phone.value);
  if (testPhone) {
    phone.style.border = "2px solid green";
    showPhone.innerHTML = "";
    validPhone = true;
  } else {
    phone.style.border = "2px solid red";
    showPhone.innerHTML = "Invalid phone number";
    validPhone = false;
    if (username.value == "") {
      showUser.innerHTML = "please enter a value";
      username.style.border = "2px solid red";
    }
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "") {
    showUser.innerHTML = "please enter a value";
    username.style.border = "2px solid red";
  }
  if (email.value == "") {
    showEmail.innerHTML = "please enter an email";
    email.style.border = "2px solid red";
  }
  if (password.value == "") {
    showPassword.innerHTML = "please enter a password";
    password.style.border = "2px solid red";
  }
  if (phone.value == "") {
    showPhone.innerHTML = "please enter phone number";
    phone.style.border = "2px solid red";
  }

  if (validEmail && validPassword && validPhone && validUsername) {
    swal("Congratulations!", "You form is submitted to Aashu!", "success");
  }
});

//CHANGE FOCUS ON ENTER

let allInput = document.querySelectorAll("input");

for (let i = 0; i < allInput.length; i++) {
  allInput[i].addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === 13) {
      if (this.parentElement.nextElementSibling.querySelector("input")) {
        this.parentElement.nextElementSibling.querySelector("input").focus();
      }
      if (this.parentElement.nextElementSibling.querySelector("button")) {
        if (validEmail && validPassword && validPhone && validUsername) {
          swal(
            "Congratulations!",
            "You form is submitted to Aashu!",
            "success"
          );
        }
      }
    }
  });
}
