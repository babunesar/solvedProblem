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