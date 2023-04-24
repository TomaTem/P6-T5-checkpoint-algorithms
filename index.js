// Код для первого задания напиши в этой функции
function crawlTree(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result += arr[i];
        } else {
            result += crawlTree(arr[i]);
        }
    }
    return result;
}

// Код для второго задания напиши в этой функции
// без рекурсии
function twoSum(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        a = target - arr[i];
        j = arr.lastIndexOf(a);
        if (arr.includes(a) && i != j) {
            result.push(i, j);
            return result;
        }
    } return result
}

// с рекурсией
function twoSumRec(arr, target, i = 0) {
    let result = [];
    a = target - arr[i];
    j = arr.lastIndexOf(a);
    if (arr.includes(a) && i != j) {
        result.push(i, j);
        return result;
    } else if (i < arr.length -1) {
        return twoSum(arr, target, i+1);
    } else {
        return result
    }
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = {crawlTree, twoSum, twoSumRec};
module.exports = functions;
