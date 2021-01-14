function fieldIsFilled(text) {
    if ((text === undefined) || (text == "")) {
        return false;
    }
    else {
        return true;
    }
}

function emailIsMatchFormat (email) {
    if (email.indexOf("@") == -1) {
        return false;
    } else {
        return true;
    }
}

function passwordIsMatchRequirements (password) {
    if (password.length < 5) {
        return false;
    } else {
        return true;
    }
}

function comparePasswords(pass, passConfirm) {
    if (pass != passConfirm) {
        return false;
    } else {
        return true;
    }
}