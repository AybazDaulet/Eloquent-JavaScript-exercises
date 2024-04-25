const countBs = function (str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            counter += 1;
        }
    }
    return counter;
}

const countChar = function(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            counter += 1;
        }
    }
    return counter;
}