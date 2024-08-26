/* 1 */

const numInput1 = +prompt('Enter a number:');

const numberType1 = function (num1) {
  if (num1 % 2 === 0) {
    return `Number ${num1} is even`;
  }
  return `Number ${num1} is odd`;
};
const result1 = numberType1(numInput1);
console.log(result1);

/* 2 */

const numInput2 = +prompt('Enter a number:');

const numberType2 = function (num2) {
  if (num2 !== 0) if (num2 > 0) return `Number ${num2} is positive`;
  if (num2 < 0) return `Number ${num2} is negative`;
  return 'Error';
};
const result2 = numberType2(numInput2);
console.log(result2);

/* 3 */

const numInput3 = +prompt('Enter a first number:');
const numInput4 = +prompt('Enter a second number:');

const numberBig = function (num3, num4) {
  if (num3 > num4) return `Number ${num3} is bigger`;
  if (num3 < num4) return `Number ${num4} is bigger`;
  return 'Both numbers are equal';
};
const result3 = numberBig(numInput3, numInput4);
console.log(result3);

/* 4 */

const numInput5 = prompt('Enter a number from 0 to 100:'); // Не приводим к числу сразу

const note = function (num5) {
  // Проверяем, не пустое ли значение, является ли оно числом и находится ли в пределах от 0 до 100
  if (num5 !== null && num5.trim() !== '' && !isNaN(num5)) {
    num5 = +num5; // Приводим строку к числу только после проверок
    if (num5 >= 0 && num5 <= 100) {
      if (num5 >= 90 && num5 <= 100) { return 'Perfect'; }
      if (num5 >= 75 && num5 <= 89) { return 'Good'; }
      if (num5 >= 50 && num5 <= 74) { return 'Not bad'; }
      return 'Bad';
    }
  }
  return 'error';
};

const result4 = note(numInput5);
console.log(result4);

/* 5 */
const numInput6 = prompt('Enter a first number:');
const numInput7 = prompt('Enter a second number:');
const operatorInput = prompt('Enter an operator:');

const calculator = function (num6, num7) {
  if ((num6 !== null && num6.trim() !== '' && !isNaN(num6))
      && (num7 !== null && num7.trim() !== '' && !isNaN(num7)) && operatorInput.trim() !== '') {
    num6 = +num6;
    num7 = +num7;
    if (operatorInput === '+') {
      return num6 + num7;
    }
    if (operatorInput === '-') {
      return num6 - num7;
    }
    if (operatorInput === '*') {
      return num6 * num7;
    }
    if (operatorInput === '/') {
      if (num7 === 0) {
        return 'you cannot divide by 0';
      }
      return num6 / num7;
    }
    if (operatorInput === '=') {
      return 'You should enter action operator';
    }
  }
  return 'error';
};
const result5 = calculator(numInput6, numInput7);
console.log(result5);

/* 6 */

const xInput = prompt('Enter a X axes:');
const yInput = prompt('Enter a Y axes:');

const axesFunction = function (x, y) {
  if (x !== null && x.trim() !== '' && !isNaN(x)
&& y !== null && y.trim() !== '' && !isNaN(y)) {
    x = Number(x);
    y = Number(y);
    if (x === 0 && y === 0) return 'it is a center';
    if (x > 0 && y > 0) return 'it is 1 quarter';
    if (x < 0 && y > 0) return 'it is 2 quarter';
    if (x < 0 && y < 0) return 'it is 3 quarter';
    if (x > 0 && y < 0) return 'it is 4 quarter';
    if (x === 0 || y === 0) return 'the point is on the axe';
  }
  return 'error';
};
const result6 = axesFunction(xInput, yInput);
console.log(result6);

/* 7 */

const aInput = prompt('Enter first side length:');
const bInput = prompt('Enter second side length:');
const cInput = prompt('Enter third side length:');

const aInputNum = Number(aInput);
const bInputNum = Number(bInput);
const cInputNum = Number(cInput);

const triangle = function (a, b, c) {
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a <= 0 || b <= 0 || c <= 0) return "This triangle doesn't exist";

    if (a === b && b === c) return 'This is an equilateral triangle';
    if (a === b || b === c || a === c) return 'This is an isosceles triangle';
    return 'This is a scalene triangle';
  }
  return 'Error: invalid input';
};
const result7 = triangle(aInputNum, bInputNum, cInputNum);
console.log(result7);

/* 8 */

const yearInput = prompt('Enter year:');
const yearNum = Number(yearInput);

const leapYear = function (year) {
  if (!isNaN(year)) {
    if ((year % 4 === 0 || year % 100 !== 0) && year % 400 === 0) {
      return 'It is a leap year';
    }
    return 'It is not a leap year';
  }
  return 'Error: invalid input';
};
const result8 = leapYear(yearNum);
console.log(result8);

/* 9 */
