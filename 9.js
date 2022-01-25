//* 1 Создайте функцию shallowMerge
//* Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом
//* Функция возвращает новый объект, который в себе объединяет свойства обоих объектов
//* Свойства необходимо копировать лишь на один уровень каждого их объектов
//* Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
  // Условия
    // Встроенный метод Object.create() использовать запрещено
    // При копировании любого свойства необходимо обязательно сохранить его дескрипторы
    // Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра
const shallowMerge = (target, ...sources) => {
    sources.forEach(source => {
      Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {}));
    })

    const result = Object.assign(
        target,
        ...sources,
    )
    return result
}    
//* 2 