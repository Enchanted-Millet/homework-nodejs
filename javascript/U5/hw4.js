function checkPassword(str) {
    // (?=(.*<rule>){,4})
    const regex =
        /^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[a-z]){1,})(?!.*\W).{6,10}$/;
    return new RegExp(regex).test(str);
    // \w -> [a-zA-Z]
}

console.log(checkPassword('AS1!nml'));
