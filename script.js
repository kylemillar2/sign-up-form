const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#error-email");

const confirmPwdInput = document.querySelector("#confirm-password");
const confirmPwdError = document.querySelector("#error-confirm-password");

const pwdInput = document.querySelector("#password");

emailInput.addEventListener("input", function (event) {
  if (emailInput.validity.valid) {
    emailError.innerHTML = "&nbsp;";
  } else {
    showError();
  }
});

confirmPwdInput.addEventListener("input", function (event) {
  if (confirmPwdInput.value === pwdInput.value) {
    confirmPwdError.innerHTML = "&nbsp;";
  } else {
    console.log(confirmPwdInput.value, pwdInput.value);
    showPwdError();
  }
});

function showError() {
    emailError.textContent = "Please enter an email address";
}

function showPwdError() {
  confirmPwdError.textContent = "Passwords must match";
}