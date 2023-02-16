// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


function isPowerOfTwo(num) {
    if (num === 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

let num = 0
function powerOfTwo(n) {
    num = n / 2;
    if (n <= 2) return isPowerOfTwo(num);
    powerOfTwo(num);
}


// -------------------------------------------------
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).

let sum = 0
function getSum(n) {
    a = n % 10
    n = n / 10 - a / 10; 
    sum += a
    if (a < 1) return console.log(sum);
    getSum(n);
}


getSum(179);