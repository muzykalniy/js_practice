'use strict';

// Четное или нечетное число
// Напиши функцию, которая принимает число и выводит, является ли оно четным или нечетным.

const numInput1 = +prompt('Enter a number:');


const numberType1 = function (num1) {
  if (num1 % 2 === 0) {
    return `Number ${num1} is even`;
  }
  return `Number ${num1} is odd`;
};
const result1 = numberType1(numInput1);
console.log(result1);

// Положительное, отрицательное или ноль
// Напиши функцию, которая принимает число и определяет, является ли оно положительным,
// отрицательным или равным нулю.

const numInput2 = +prompt('Enter a number:');

const numberType2 = function (num2) {
  if (num2 !== 0) if (num2 > 0) return `Number ${num2} is positive`;
  if (num2 < 0) return `Number ${num2} is negative`;
  return 'Error';
};
const result2 = numberType2(numInput2);
console.log(result2);
