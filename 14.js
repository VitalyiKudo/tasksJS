//* 1 Добавьте роботу функционал употребления энергии
//* - при начале уборки уровень энергии должен уменьшиться
//* - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION
//* Затем добавьте роботу публичный метод stop() для остановки процесса уборки
//* В если уборка остановлена раньше времени завершения,
//* onReady сработать не должен, а также нужно вывести другое сообщение
//* Условия:
//* - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять
//* - использовать функцию clearTimeout
//* - идентификатор таймера нужно хранить в приватной переменной конструктора
function CleanerRobot(
    initialEnergy = 0 /* Изначальный заряд батареи робота */,
    cleaningSquare /* Площадь для уборки в метрах. */,
) {
    let energy = initialEnergy;
    let timerId = 0;
    const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
    const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
    const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
    const getEnergy = () => energy = (energy - (ENERGY_CONSUMPTION * getCleaningTime()))
    const onReady = () =>
        console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);
    const onStop = () => 
        console.log(`Уборка завершена досрочно. Осталовсь заряда батареи: ${energy}`)   
    this.clean = () => {
        const cleaningTime = getCleaningTime();
        getEnergy()
        console.log(
            `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        );

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
       timerId = setTimeout(onReady, cleaningTime * 1000);
    };
    this.stop = () => {
        clearTimeout(timerId)
        onStop()
    } 
}
//* 2 Добавьте роботу геттер и сеттер для приватного свойства energy
//* Нужно, чтобы внешний код мог узнать заряд батареи робота
//* Условия:
//* - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять
// Генерировать ошибки если
    // новый заряд батареи устанавливается в значении меньшем, чем 0
    // новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY
    // при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона
function CleanerRobotPlus(initialEnergy = 0 /* Изначальный заряд батареи */) {
    this.getEnergy = getEnergy;
    this.setEnergy = setEnergy;

    const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    let energy = null;

    this.setEnergy(initialEnergy);

    function getEnergy() {
        console.log(`Current battery level: ${energy}`)
    }
    function setEnergy(value) {
        if(value < 0) {
            throw new Error(`New energy level can not be less than 0`)
        }
        if(value > MAX_ENERGY_CAPACITY) {
            throw new Error(`New energy level can not be more than ${MAX_ENERGY_CAPACITY}`)
        }
        energy = value
    }
}
