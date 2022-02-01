form1.addEventListener('submit', function(e) {
    e.preventDefault();
});

function setError(id, error, color) {
    var element = document.getElementById(id);
    element.innerHTML = error;
    element.style.borderColor = color;
}

function clearErrors() {
    errors = document.getElementsByClassName("form-error");
    for (var item of errors) {
        item.innerHTML = "";
    }
}

function setPlaceHolder(name) {
    pd = document.getElementsByName(name);
    pd[0].placeholder = "";
}

function validateForm() {
    var returnVal = true;
    clearErrors();
    const fName = document.getElementById("f_name");
    const lName = document.getElementById("l_name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (fName.value.length == 0) {
        setError("fname-msg", "First Name cannot be empty", "#ff7a7a");
        fName.classList.add("red");
        setPlaceHolder("f_name");
        returnVal = false;
    } else {
        fName.classList.remove("red");
        returnVal = true;
    }
    if (lName.value.length == 0) {
        setError("lname-msg", "Last Name cannot be empty", "#ff7a7a");
        lName.classList.add("red");
        setPlaceHolder("l_name");
        returnVal = false;
    } else {
        lName.classList.remove("red");
        returnVal = true;
    }
    if (email.value.length == 0) {
        setError("email-msg", "Looks like this is not an email", "#ff7a7a");
        email.classList.add("red");
        document.getElementsByName("email")[0].placeholder = "email@example/com";
        returnVal = false;
    } else {
        email.classList.remove("red");
        returnVal = true;
    }
    if (password.value.length == 0) {
        setError("password-msg", "Password cannot be empty", "#ff7a7a");
        password.classList.add("red");
        setPlaceHolder("password");
        returnVal = false;
    } else {
        password.classList.remove("red");
        returnVal = true;
    }
    return returnVal;
}