let array = [3, 6, 4, 7, 2, 1, 9];

function indexOfNum(array, num) {
    console.log(`Индекс числа ${num} в масиве [${array}] = ${array.indexOf(num)}`);
}

indexOfNum(array, 2)



function sumOfSquares(array) {
    let squaredArray = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        squaredArray.push(array[i] * array[i]);
        sum += squaredArray[i];
    }
    console.log(`Сумма квадратов всех элементов массива [${array}] = ${sum}`);
}

sumOfSquares(array)