//  1 Перепишите код, заменив оператор `if` на тернарный оператор `?`
const a = 2;
const b = 1;
let result = null;

result = a + b < 4 ? true : false;
// 2 Перепишите `if..else` с использованием нескольких операторов `?`. 
var login
var message =
    login === "Piter"
        ? "Hi"
        : login === "Owner"
        ? "Hello"
        : login === ""
        ? "unknown"
        : "";
// 3 Перепишите код, заменив оператор `switch` на оператор `if..else`:
const getValue = (value) => {
    if (value === "a") {
        return "a"
    } else if (value === "b" || value === "c" || value === "d" || value === "e") {
        return "others"
    } else {
        return "unknown"
    }
}
// 4 Перепишите код с использованием одной конструкции `switch`:
const getValueFromSwitch = (value) => {
    switch (value) {
        case 0:
            return 0
        case 1:
            return 1
        case 2:
        case 3:
            return 2,3 
        default:
            return "unknown"
    }
}
// 5 Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.
const getNumbers = (number) =>  {
    while (number < 3) {
        console.log("number" + number + "!")
        number++
    }
    return null
}
// 6 Написать код который посчитает сумму всех элементов в массиве.
const arraySum = (array) => {
    let sum = 0
    for (let i = 0 ; i < array.length ; i++) {
        sum = sum + array[i]
    }
    return sum
}
// 7 Напишите код, который посчитает сумму всех парных элементов в массиве.
const arrayEvenSum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
           sum = sum + array[i]
        }
    }
    return sum
}
// 8 Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.
const arrayEvenSumPlus = (array, condition) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] > condition) {
            sum = sum + array[i]
        }
    }
    return sum
}
// 9 Отсортируйте массив по убыванию.
const arrayDescending = (array) => {
    let result = []
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            result.unshift(array[i])
        } else {
            result.push(array[i])
        } 
    }
    return result
}
// 10 Отсортируйте массив по возрастанию.
const arrayAscending = (array) => {
    let result = []
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            result.push(array[i])
        } else {
            result.unshift(array[i])
        } 
    }
    return result
}
// 11 С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
const logArray = (array, firstCondition, secondCondition) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstCondition && array[i] < secondCondition) {
            console.log(array[i])       
        }
    }
    return null
}
// 12 Найдите сумму положительных элементов массива
const sumOfPosible = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum = sum + array[i] 
        }
    }
    return sum
}
// 13 С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо
const isHasValue = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return "Has"
        } else if (array[i] !== value && i === array.length - 1) {
            return null
        }    
    }
}
// 14 Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`
const finalFunction = (number, finalValue) => { 
    let result = number
    let iters = 0
    while (result > finalValue) {
        result = result / 2
        iters++
    }
    return `result: ${result} iterations: ${iters}`
}