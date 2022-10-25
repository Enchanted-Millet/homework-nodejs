const password = "ABc1234";
function isValidPassword(str) {
  const reg = /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?!.*\W).{6,10}$/;
  console.log(new RegExp(reg).test(str));
}
isValidPassword(password);
