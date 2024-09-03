'use strict';


// 1

const doSomething = function (number, callback) {
  const result = number * 2;
  callback(result);
};
doSomething(5, (result) => {
  console.log('Result of ', result);
});

// 2
const processNumber = function (number, callback) {
// Проверь четность числа и вызови callback, если число четное
  if (number % 2 === 0) {
    callback(number);
  } else callback(number);
};

processNumber(4, (number) => {
  console.log('Четное число:', number);
});
processNumber(3, (number) => {
  console.log('Нечетное число:', number);
});

// 3
const processArray = function (arr, callback) {
// Пройди по каждому элементу массива и вызови callback
  for (const item of arr) {
    const itemDouble = item * 2;
    callback(itemDouble);
  }
};

processArray([1, 2, 3], (itemDouble) => {
  console.log('Обработанный элемент:', itemDouble);
});

// 4
function filterArray(arr, callback) {
// Создай новый массив, добавляя элементы, которые проходят проверку callback
  const newArr = [];
  for (const item of arr) {
    if (callback(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}
const result = filterArray([1, 2, 3, 4, 5], (item) => item > 3);
console.log(result); // Должно вывести: [4, 5]
