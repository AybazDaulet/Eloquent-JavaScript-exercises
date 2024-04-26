const arrayToList = function (array) {
    let list = { value: null, rest: null };
    for (let i = array.length - 1; i >= 0; i--) {
        let temp = {};
        Object.assign(temp, list);
        temp.value = array[i];
        if (i == 0) {
            list = temp;
            break;
        }
        list.rest = temp;
    }
    return list;
}

const listToArray = function (list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

const prepend = function (element, list) {
    let new_list = { value: null, rest: null };
    new_list.value = element;
    new_list.rest = list;
    return new_list;
}

const nth = function (list, number) {
    if (number <= 0) {
        return list.value;
    }
    return nth(list.rest, number - 1);
}

