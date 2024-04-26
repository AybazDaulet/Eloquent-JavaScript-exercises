const reverseArray = function(arr) {
    let new_arr = [];
    for (let x of arr) {
        new_arr.unshift(x);
    }
    return new_arr;
}

const reverseArrayInPlace = function(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}