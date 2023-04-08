/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let string = "string";
let number = 55;
let boolean = true;
let place = null;
let sum = undefined;
let human = {
  name: "Vasya",
  lastName: "Pupkin",
  age: 32,
  sex: "male",
  married: true,
};
let array = [];

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof place);
console.log(typeof sum);
console.log(typeof human);
console.log(typeof array);
