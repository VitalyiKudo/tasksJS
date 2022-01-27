//* 1 Реализуйте класс Worker, который будет иметь следующие свойства:
//* - firstName — имя
//* - lastName — фамилия
//* - rate — ставка за день работы
//* - days — количество отработанных дней
//* Класс должен иметь метод getSalary(), который будет возвращать зарплату работника
//* Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days
//* Условия:
//* - Реализация решения — это синтаксис современных классов JavaScript;
class Worker {
    constructor(firstName,lastName,rate,days) {
        this.firstName = firstName
        this.lastName = lastName
        this.rate = rate,
        this.days = days
    }
    get Salary() {
        return this.rate * this.days 
    }
}
//* 2 Улучшите класс Worker из предыдущей задачи.
//* Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
//* - getName — возвращает конкатенацию приватных свойств firstName и lastName;
//* - getRate — возвращает значение приватного свойства rate
//* - getDays — возвращает значение приватного свойства days
//* - getSalary — возвращает зарплату
//* Условия:
//* - Реализация решения — это синтаксис современных классов JavaScript;
//* - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
class WorkerPlus {
    #firstName;
    #lastName;
    #rate;
    #days;
    constructor(firstName,lastName,rate,days) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#rate = rate,
        this.#days = days
    }
    get name() {
        return this.#firstName + " " + this.#lastName
    }
    get rate() {
        return this.#rate 
    }
    get days() {
        return this.#days 
    }
    get Salary() {
        return this.#rate * this.#days 
    }
}
//* 3 Улучшите класс Worker из предыдущей задачи
//* Для свойства rate и days добавьте методы для установки значений
//* Условия:
//* - Реализация решения — это синтаксис современных классов JavaScript
//* - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства)
class WorkerSet {
    #firstName;
    #lastName;
    #rate;
    #days;
    constructor(firstName,lastName,rate,days) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#rate = rate,
        this.#days = days
    }
    get name() {
        return this.#firstName + " " + this.#lastName
    }
    get rate() {
        return this.#rate 
    }
    set rate(value) {
        this.#rate = value
    }
    get days() {
        return this.#days 
    }
    set days(value) {
        this.#rate = value
    }
    get Salary() {
        return this.#rate * this.#days 
    }
}
//* 4 Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
//* - reverse(string) — возвращает строку в перевернутом виде
//* - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной
//* - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её
//* Условия:
//* - Реализация решения — это синтаксис современных классов JavaScript
class Stringer {
    reverse(string) {
        return string.split("").reverse().join("")
    }
    uppercaseFirst(string) {
        return string[0].toUpperCase() + string.slice(1)
    }
    uppercaseAll(string) {
        return string.toUpperCase()
    }
}
//* 5 Реализуйте класс Student , который наследует от класса User
//* Класс User должен обладать следующими свойствами:
//* - firstName — имя
//* - lastName — фамилия
//* - get fullName — метод, который возвращает имя и фамилию пользователя
//* Класс Student должен обладать следующими свойствами:
//* - year — год поступления в вуз
//* - get course - метод, который возвращает текущий курс студента (от 1 до 5)
//* Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз
//* Текущий год получите самостоятельно
//* Условия:
//* - Реализация решения — это синтаксис современных классов JavaScript
//* - В реализации работы метода getCourse обязательно использовать конструктор Date
class User {
    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName() {
        return this.firstName + " " +  this.lastName 
    }
}
class Student extends User {
    constructor(firstName,lastName,year) {
        super(firstName, lastName)
        this.year = year
    }
    get course() {
        const dateNow = new Date()
        const yearNow = dateNow.getFullYear()
        return yearNow - this.year
    }
}

