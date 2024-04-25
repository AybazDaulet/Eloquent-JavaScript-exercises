const range = function(start, end, step = 1) {
    let arr = [];
    for (let i = start; end > start ? i <= end : i >= end; i += step) {
        arr.push(i);
    }
    return arr;
}

const sum = function(arr) {
    let sum_of_arr = 0;
    for (let n of arr) {
        sum_of_arr += n;
    }
    return sum_of_arr;
}

