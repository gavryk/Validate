var userName = document.forms['vform']['username'];
var userEmail = document.forms['vform']['email'];
var userPass = document.forms['vform']['password'];
var userPassConf = document.forms['vform']['password_confirm'];

var nameErr = document.getElementById('name_error');
var emailErr = document.getElementById('email_error');
var passErr = document.getElementById('password_error');

userName.addEventListener('blur', nameVerify, true);
userEmail.addEventListener('blur', emailVerify, true);
userPass.addEventListener('blur', passVerify, true);

var pattern = new RegExp (/^[a-zA-Zа-яА-Я0-9'][a-zA-Zа-яА-Я0-9' ]+[a-zA-Zа-яА-Я0-9']?$/u);

function Validate() {
    if (userName.value == '') {
        userName.style.border = '1px solid red';
        document.getElementById('username_div').style.color = 'red';
        nameErr.innerHTML = 'username is required';
        userName.focus();
        return false;
    }

    if (pattern.test(userName.value) == false) {
        userName.style.border = '1px solid red';
        document.getElementById('username_div').style.color = 'red';
        nameErr.innerHTML = 'username don"t must have a symbol';
        return false;
    }

    if (userName.value.length < 3 ) {
        userName.style.border = '1px solid red';
        document.getElementById('username_div').style.color = 'red';
        nameErr.innerHTML = 'username must be more longer';
        userEmail.focus();
        return false;
    }

    if (userEmail.value == '') {
        userEmail.style.border = '1px solid red';
        document.getElementById('email_div').style.color = 'red';
        emailErr.innerHTML = 'email is required';
        userPass.focus();
        return false;
    }

    if(userPass.value == '') {
        userPass.style.border = '1px solid red';
        document.getElementById('password_div').style.color = 'red';
        passErr.innerHTML = 'password is required';
        return false;
    }

    if (userPass.value !== userPassConf.value) {
        userPass.style.border = '1px solid red';
        userPassConf.style.border = '1px solid red';
        document.getElementById('password_div').style.color = 'red';
        document.getElementById('pass_confirm_div').style.color = 'red';
        passErr.innerHTML = 'wtf';
        return false;
    }
}

function nameVerify() {
    if (userName.value != '' && pattern.test(userName.value) == true) {
        userName.style.border = '1px solid #5e6e66';
        document.getElementById('username_div').style.color = '#5e6e66';
        nameErr.innerHTML = '';
        return true;
    }
}

function emailVerify() {
    if (userEmail.value != '') {
        userEmail.style.border = '1px solid #5e6e66';
        document.getElementById('email_div').style.color = '#5e6e66';
        emailErr.innerHTML = '';
        return true;
    }
}

function passVerify() {
    if (userPass.value != '' && userPass.value == userPassConf.value) {
        userName.style.border = '1px solid #5e6e66';
        document.getElementById('password_div').style.color = '#5e6e66';
        passErr.innerHTML = '';
        return true;
    }
}
