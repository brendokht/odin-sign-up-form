const signUpForm = document.forms['sign-up'];
const passErrorLabel = document.getElementById("passwordError");
const passField = signUpForm.elements['password'];
const confirmPassField = signUpForm.elements['confirm_password'];

signUpForm.addEventListener('submit', (e) => {

    var passVal = passField.value;
    var confirmPassVal = confirmPassField.value;

    console.log(passVal);
    console.log(confirmPassVal);

    if (passVal.length == 0 && confirmPassVal.length == 0) {
        e.preventDefault();
        return;
    }

    if (passVal !== confirmPassVal) {
        passErrorLabel.classList.remove('hidden');
        passErrorLabel.classList.add('visible');
        passField.classList.add('invalid');
        confirmPassField.classList.add('invalid');
        e.preventDefault();
    }
    else {
        passErrorLabel.classList.add('hidden');
        passErrorLabel.classList.remove('visible');
        passField.classList.remove('invalid');
        confirmPassField.classList.remove('invalid');
        signUpForm.submit();
    }
});