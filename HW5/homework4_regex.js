// password matching
function match_password(p) {
    if (p.length > 10 || p.length < 6) {
        errors.push("Your password length must be between 6 and 10");
    }
    if (p.search(/[a-z]/g) < 0) {
        errors.push("Your password must contain at least one lower case letter.");
    }
    if (p.search(/[0-9]/g) < 0) {
        errors.push("Your password must contain at least one number."); 
    }
    if (p.search(/[A-Z]/g) < 0) {
        errors.push("Your password must contain at least one upper case letter."); 
    }
    if (/^[A-Za-z0-9]*$/.test(p) == false) {
        errors.push("Your password must contain at least one number."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;

}

console.log(match_password('Js1234'))