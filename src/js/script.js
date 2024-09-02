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


