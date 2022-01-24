//* 1 Создайте функцию `f`, которая возвращает куб числа.
    //- Функция принимает один параметр
    //- Функция содержит проверку входного параметра на тип number
const exponentiation = (value) => {
    if ((typeof value === "number")) {
        return Math.pow(value, 3)
    } else {
        throw new Error("parameter is not a number type")
    }
}
//* 2 Создайте функцию `f`, которая возвращает сумму всех параметров.
    // Функция принимает любое количество параметров
    // Функция содержит проверку входных параметров на тип number
const sum = (...values) => {
    let sum = 0
    const result = values.forEach(value => {
        if (typeof value === "number") {
            sum = sum + value
        } else {
            throw new Error("all parameters should be a Number type")
        }
    })
    return sum
}
//* 3 Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий
    //Функция принимает три параметра
    //Функция содержит проверку входных параметров на тип number
const someMath = (fistValue, secondValue, thirdValue) => {
    if (typeof fistValue === "number" &&
        typeof secondValue === "number" &&
        typeof thirdValue === "number" )
        {
        return (fistValue - secondValue) / thirdValue
    } else {
        throw new Error("all parameters should be a Number type")
    }
}
//* 4 Сделайте функцию `f`, которая принимает параметром число от 1 до 7 а затем возвращает день недели
    // Функция принимает один параметр;
    // Функция содержит проверку входного параметра на тип number
    // Входной параметр должен быть числом от 1 до 7
const getWeekDay = (value) => {
    if (typeof value === "number") {
        if (value >= 1 && value <= 7) {
            switch (value) {
                case 1:
                    return "Monday"
                case 2: 
                    return "Tuesday"
                case 3:
                    return "Wednesday"
                case 4: 
                    return "Thursday"
                case 5: 
                    return "Friday"
                case 6: 
                    return "Saturday"
                case 7:
                    return "Sunday"              
                default:
                    break;
            }
        } else {
            throw new Error("parameter should be in the range of 1 to 7")
        }
    } else {
        throw new Error("parameter is not a number type")
    }
}   
//* 5 Дан массив с числами  [1, 2, -4, 3, -9, -1, 7]
  //* Создайте из него новый массив, где останутся только положительные числа [1, 2, 3, 7]
  //* Создайте для этого вспомогательную функцию isPositive(-3)
  //* которая параметром будет принимать число и возвращать true
  //* если число положительное, и false — если отрицательное
    // Входной параметр должен обладать типом number
    // Для добавление нового элемента в конец массива используйте метод push
const toPositive = (array) => {
    if (typeof array !== "object") throw new Error("parameter is not array")

    const isPositive = (value) => {
        return value > 0
    }

    const result = []
    array.forEach(value => {
        if(typeof value === "number") {
            if (isPositive(value)) result.push(value)
        } else {
            throw new Error("all parameters should be a Number type")
        }
    })
    return result
}
//* 6 Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет
//* Если чётное — функция возвращает`true`, если нечётное — `false`
    // Входной параметр должен обладать типом number
const isEven = (value) => {
    if ((typeof value === "number")) {
        return value % 2 === 0
    } else {
        throw new Error("parameter is not a number type")
    }
}
//* 7 Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
//* Если чётное — функция возвращает true, если нечётное — false
    // Входной параметр должен обладать типом number
    // Входной параметр должен быть больше 0
const isEvenArray = (value) => {
    const result = []

    if (typeof value !== "number") {
        throw new Error("parameter is not a number type")
    }
    if (value < 0) {
        throw new Error("parameter can't be less than 0")
    }

    for (let i = 0; i < value + 1; i++) {
        if (value % i === 0) {
            result.push(i)
        }
    }

    return result
}
//* 8 Дан массив с числами `[1, 2, 3]`.
//* Создайте функцию`f`, которая принимает массив в качестве параметра
//* затем последовательно выводит на экран его элементы
    // Входной параметр должен быть не пустым массивом
    // Обязательно использовать рекурсию
    // Использовать цикл запрещено
const f = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('parameter type should be an array');
    } else if (!array.length) {
        throw new Error("parameter can't be an empty");
    }

    let temp = array

    const logger = () => {
        const splicedArr = temp.splice(0, 1)
        const value = splicedArr[0]

        console.log(value)

        if (temp.length) {
            logger()
        }
    }

    logger()

    return null
}