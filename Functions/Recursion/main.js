const isEven = function (n) {
    if (n > 1) {
        return isEven(n - 2);
    }
    return n == 0;
}