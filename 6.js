//* 1 Вручную создать имплементацию функции `forEach`
//* Логика работы ручной имплементации должна быть такой-же как и у встроенного метода
  // Генерировать ошибки если
    // При вызове функции не было передано два аргумента
    // В качестве первого аргумента был передан не массив
    // В качестве второго аргумента была передана не функ    
const forEach = (array, func) => {
    if (array === undefined || func === undefined) {
        throw new Error("expect two parameters")
    }
    if (!Array.isArray(array)) {
        throw new Error("first parameter must be array")
    }
    if (typeof func !== "function") {
        throw new Error("second parameter must be a function")
    }

    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array)
    }
    
} 
//* 2 Вручную создать имплементацию функции `filter`
//* Логика работы ручной имплементации должна быть такой-же как и у встроенного метода
const filter = (array, func) => {
    if (array === undefined || func === undefined) {
        throw new Error("expect two parameters")
    }
    if (!Array.isArray(array)) {
        throw new Error("first parameter must be array")
    }
    if (typeof func !== "function") {
        throw new Error("second parameter must be a function")
    }
    
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}
//* 3 Вручную создать имплементацию функции `every`
//* Логика работы ручной имплементации должна быть такой-же как и у встроенного метода
const every = (array, func) => {
    if (array === undefined || func === undefined) {
        throw new Error("expect two parameters")
    }
    if (!Array.isArray(array)) {
        throw new Error("first parameter must be array")
    }
    if (typeof func !== "function") {
        throw new Error("second parameter must be a function")
    }
    for (let i = 0; i < array.length; i++) {
        if(!func(array[i], i, array)) {
            return false
        } 
    }
    return true
}
//* 4 Вручную создать имплементацию функции `some`
//* Логика работы ручной имплементации должна быть такой-же,как и у встроенного метода
const some = (array, func) => {
    if (array === undefined || func === undefined) {
        throw new Error("expect two parameters")
    }
    if (!Array.isArray(array)) {
        throw new Error("first parameter must be array")
    }
    if (typeof func !== "function") {
        throw new Error("second parameter must be a function")
    }
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array)) {
            return true
        } 
    }
    return false
}
//* 5 Вручную создать имплементацию функции `reduce`
//* Логика работы ручной имплементации должна быть такой-же как и у встроенного метода
const reduce = (array, func, initial) => {
    if (array === undefined || func === undefined) {
        throw new Error("expect minimum two parameters")
    }
    if (!Array.isArray(array)) {
        throw new Error("first parameter must be array")
    }
    if (typeof func !== "function") {
        throw new Error("second parameter must be a function")
    }
    if (initial !== undefined && typeof initial !== "number") {
        throw new Error("initial must be a number")
    }

    let result = initial ? initial : 0 
    for (let i = 0; i < array.length; i++) {
        result = func(result,array[i], i, array)
    }
    return result
}