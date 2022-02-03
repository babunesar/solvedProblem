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