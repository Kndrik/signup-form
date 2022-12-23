document.querySelector('input[name="password"]').addEventListener("keyup", checkForPasswordMatch);
document.querySelector('input[name="password-confirm"]').addEventListener("keyup", checkForPasswordMatch);

function checkForPasswordMatch() {
    var password = document.querySelector('input[name="password"]');
    var passwordConfirm = document.querySelector('input[name="password-confirm"]');
    
    if (password.value !== passwordConfirm.value || password.value === "" || passwordConfirm.value === "") {
        password.setAttribute("class", "error");
        passwordConfirm.setAttribute("class", "error");
    } else {
        password.setAttribute("class", "");
        passwordConfirm.setAttribute("class", "");
    }
}

function checkForValidation() {
    var password = document.querySelector('input[name="password"]');
    
    if(password.classList.contains("error")) {
        alert("Oops, password do not match!");
        return false;
    } else {
        return true;
    }
}