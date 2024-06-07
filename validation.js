function check_password() {
    if (document.getElementById('user_password').value == document.getElementById('confirm_password').value) {
        document.getElementById('submit-button').disabled = false;
        document.getElementById('user_password').classList.remove("invalid-password");
        document.getElementById('confirm_password').classList.remove("invalid-password");
        document.getElementById('password-error').classList.remove("invalid-password");
    }
    else {
        document.getElementById('submit-button').disabled = true;
        document.getElementById('user_password').classList.add("invalid-password");
        document.getElementById('confirm_password').classList.add("invalid-password");
        document.getElementById('password-error').classList.add("invalid-password");
    }
}