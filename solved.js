var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addNewNum(ary, index, number) {
    ary[ary.length] = undefined;
    var a = ary.length - 2;
    for (i = ary.length - 1; i > index; i--) {
        ary[i] = ary[a];
        a--;
    }
    ary[index] = number;
    return ary;
}
console.log(addNewNum(arr, 3, 33));

let tr = [2, 55, 60, 70211, 86];
function checkSeven(input) {
    let temp = 0;
    for (i = 0; i < tr.length; i++) {
        temp = tr[i];
        while (temp > 0) {
            if (temp % 10 == 7) {
                return 'Seven Here';
            }
            temp = Math.floor(temp /= 10);
        }
    }
    return 'Seven Not Here';
}
console.log(checkSeven(tr));

let common = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequentItem(input) {
    let frequentItem = input[0];
    let check = 0;
    for (const item of input) {
        let count = 0;
        for (const secondItem of input) {
            if (item == secondItem) {
                count++;
            }
        }
        if (count > check) {
            check = count;
            frequentItem = item;
        }
    }
    return frequentItem;
}
console.log(mostFrequentItem(common));

// leetcode Problem
let arr2 = [2, 3, 4, 7, 10];
let arr3 = [];
let a = 0;
let b = 0;
const k = 5;
let stop = arr.length + k;
for (let i = 1; i <= stop; i++) {
    if (i != arr2[a]) {
        arr3[b] = i;
        b++;
    } else {
        a++;
    }
}
for (let index = 0; index < k; index++) {
    var element = arr3[index];
}
console.log(element);