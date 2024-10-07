const userData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const nameInput = document.getElementById("name");
const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirm-password");


function checkName(){
    if(document.getElementById("name").value.length < 3){
        nameInput.style.border = '2px solid';
        nameInput.style.borderColor = 'red';
        document.getElementById("name-error").hidden = false;
        document.getElementById("name-error").style.color = "red";
        document.getElementById("name-error").textContent = "Name must be at least 3 characters long";
        return false;
    }
    else {
        document.getElementById("name-error").hidden = true;
        document.getElementById("name").style.border = "2px solid";
        document.getElementById("name").style.borderColor = "green";
        return true;
    }
}

function checkPasswordEquality(){
    const errorMsg = document.getElementById("confirm-pass-error");
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if(password != confirmPassword){
        confirmPassInput.style.border = '2px solid';
        confirmPassInput.style.borderColor = 'red';
        errorMsg.hidden = false;
        errorMsg.style.color = "red";
        errorMsg.textContent = "Passwords do not match";
        return false;
    }
    else
    {
        errorMsg.hidden = true;
        confirmPassInput.style.border = "2px solid";
        confirmPassInput.style.borderColor = "green";
        return true;
    }
}

function checkPasswordLength(){
    const errorMsg = document.getElementById("pass-error");
    let password = document.getElementById("password").value;
    if(password.length < 8){
        passInput.style.border = '2px solid';
        passInput.style.borderColor = 'red';
        errorMsg.hidden = false;
        errorMsg.style.color = "red";
        errorMsg.textContent = "Password must be at least 8 characters long";
        return false;
    }
    else
    {
        errorMsg.hidden = true;
        passInput.style.border = "2px solid";
        passInput.style.borderColor = "green";
        return true;
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const successMsg = document.getElementById("success-msg");
    const isNameValid = checkName();
    const isPasswordValid = checkPasswordEquality();
    const isPasswordLengthValid = checkPasswordLength();

    if(!isNameValid || !isPasswordValid || !isPasswordLengthValid){
        successMsg.hidden = false;
        successMsg.style.color = "red";
        successMsg.textContent = "Form submission failed";
    }
    else {
        // Success Things
        successMsg.hidden = false;
        successMsg.style.color = "green";
        successMsg.textContent = "Form submitted successfully";

        // UserData Things
        userData.name = nameInput.value;
        userData.password = passInput.value;
        userData.confirmPassword = confirmPassInput.value;
        
    }
    console.log(userData);
});


