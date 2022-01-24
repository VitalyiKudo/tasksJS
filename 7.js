//* 1 Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента и возвращать новый массив
//* Этот новый массив должен содержать исключительно длины строк, которые были в переданном массиве
//* Если строк в переданном массиве не было — нужно вернуть пустой массив
  // Генерировать ошибки, если
    // При вызове функции не был передан один аргумент
    // качестве первого аргумента был передан не массив

const inspect = (array) => {
    if (!array) {
        throw new Error("expect parameter")
    }
    if (!Array.isArray(array)) {
        throw new Error("parameter must be array")
    }

    return  array.filter(el => typeof el === "string").map(el => el.length)
}
//* 2 Напишите функцию `collect`, которая будет принимать массив в качестве аргумента, и возвращать число
//* Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым
//* Число, которое возвращает функция должно быть суммой всех элементов на всех уровнях всех вложенных массивов
//* Если при проходе всех уровней не было найдено ни одного числа, то функция должна возвращать число 0
  // Генерировать ошибки, если
    // При вызове функции не был передан один аргумент
    // качестве первого аргумента был передан не массив
    // Если на каком-то уровне было найдено не число и не массив
const collect = (array) => {
    if (!array) {
        throw new Error("expect parameter")
    }
    if (!Array.isArray(array)) {
        throw new Error("parameter must be array")
    }

    const flattedArray = array.flat(Infinity)

    if (flattedArray.length === 0) {
        return 0
    }

    return flattedArray.reduce(function(prev,current) {
        if (typeof prev !== "number" || typeof current !== "number") {
            throw new Error("expect only numbers")
        } else {
            return prev + current
        }
    })
}
//* 3 Напишите функцию `createArray`, которая будет создавать массив с заданными значениями
//* Первым параметром функция принимает значение, которым заполнять массив
//* А вторым — количество элементов, которое должно быть в массиве
  // Генерировать ошибки, если
    // При вызове функции не было передано два аргумента
    // В качестве первого аргумента были переданы не число, не строка, не объект и не массив
    // В качестве второго аргумента был передан не число
const createArray = (value, number) => {
    if (value === undefined || number === undefined) {
        throw new Error("expect two parameters")
    }
    if (typeof value !== "number" && typeof value !== "string" && typeof value !== "object" && !Array.isArray(value)) {
        throw new Error("not supported parameter type")
    }
    if(typeof number !== "number") {
        throw new Error("second parameter must be a number")
    }

    const result = new Array(number).fill(value)

    return result
}    
