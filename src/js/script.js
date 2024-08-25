/* Четное или нечетное число
 Напиши функцию, которая принимает число и выводит, является ли оно четным или нечетным. */

const numInput1 = +prompt('Enter a number:');

const numberType1 = function (num1) {
  if (num1 % 2 === 0) {
    return `Number ${num1} is even`;
  }
  return `Number ${num1} is odd`;
};
const result1 = numberType1(numInput1);
console.log(result1);

/* Положительное, отрицательное или ноль
 Напиши функцию, которая принимает число и определяет, является ли оно положительным,
 отрицательным или равным нулю */

const numInput2 = +prompt('Enter a number:');

const numberType2 = function (num2) {
  if (num2 !== 0) if (num2 > 0) return `Number ${num2} is positive`;
  if (num2 < 0) return `Number ${num2} is negative`;
  return 'Error';
};
const result2 = numberType2(numInput2);
console.log(result2);

/* Максимум из двух чисел
Напиши функцию, которая принимает два числа и возвращает большее из них. */

const numInput3 = +prompt('Enter a first number:');
const numInput4 = +prompt('Enter a second number:');

const numberBig = function (num3, num4) {
  if (num3 > num4) return `Number ${num3} is bigger`;
  if (num3 < num4) return `Number ${num4} is bigger`;
  return 'Both numbers are equal';
};
const result3 = numberBig(numInput3, numInput4);
console.log(result3);

/* Оценка по баллам
Напиши программу, которая принимает на вход число (от 0 до 100) и
выводит оценку по следующим критериям:
90-100: Отлично
75-89: Хорошо
50-74: Удовлетворительно
0-49: Неудовлетворительно */

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

/* Простой калькулятор
Напиши программу, которая принимает два числа и оператор (+, -, *, /),
а затем возвращает результат выполнения этого оператора над этими числами. */
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
  }
  return 'error';
};
const result5 = calculator(numInput6, numInput7);
console.log(result5);
