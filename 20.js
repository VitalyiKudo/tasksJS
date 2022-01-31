//* 1 Создайте класс `Customers` который умеет работать с механизмом `for of`
//* Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. 
//* У этого объекта есть обязательное поле `name` и необязательное поле `verified`
//* Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты 
//* у которых был установлен флаг `verified: true`
    // 1. Использование генераторов **запрещено**
    // 2. Использование посторонних библиотек **запрещено**
    // 3. У класса `Customers` **должен** быть метод `Symbol.iterator`
class Customers {
    constructor() {
        this.customers = []
    }
    add(object) {
        const { name, verified } = object
        this.customers.push(object)
    }
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                const verifiedCutomers = this.customers.filter(customer => customer.verified)
                const done = i >=  verifiedCutomers.length
                const value = !done ? verifiedCutomers[i++] : undefined
                return {
                    done,
                    value
                }
            }
        }
    }
}
//* 2 Улучшите класс `Customers` добавив функцию генератор
class CustomersPlus {
    constructor() {
        this.customers = []
    }
    add(object) {
        const { name, verified } = object
        this.customers.push(object)
    }
    *[Symbol.iterator]() {
        const verifiedCutomers = this.customers.filter(customer => customer.verified)
        for (const item of verifiedCutomers) {
            yield item
        }
    }
}
