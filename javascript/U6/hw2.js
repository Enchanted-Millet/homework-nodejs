(function () {
    try {
        throw new Error({ message: 'new Error' });
    } catch (x) {
        // error = x
        var x = 1,
            y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
