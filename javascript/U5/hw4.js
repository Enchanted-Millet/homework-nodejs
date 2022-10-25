const passwordRule = (str) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/
    return re.test(str)
}

console.log(passwordRule('abcde12'))
console.log(passwordRule('ABCDE12'))
console.log(passwordRule('abcdeFG'))
console.log(passwordRule('abcdEF12!'))
console.log(passwordRule('abcD1'))
console.log(passwordRule('abcdEF12345'))
console.log(passwordRule('ABCDe12'))
console.log(passwordRule('abcdE12'))
console.log(passwordRule('abcDE1'))