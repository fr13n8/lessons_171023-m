// function greet(firstName = "Jake", ...arrayOfArgs) {
//   // тело функции
//   // console.log(`Hello ${firstName}`)

//   return `Hello ${firstName}` // справа пишем значение которое возвращается на место вызова функции

//   console.log("Hello") // код после return никогда не будует запущен
//   return // останавливает функцию без возврата значений
// }

// greet("John") // `Hello John`
// greet("Anna") // `Hello Anna`
// let greetResult = greet() // `Hello Jake`
// console.log(greet())
// console.log(`${greetResult}. How are you?`)


// let product = {
//   title: "Macbook",
//   price: 1000
// }

// function test({title:productName}) { // деструктуризацию можно использовать и внутри аргументов функции тоже
//   console.log(productName)
// }

// test(product)

// ---------------- tasks ----------------
// Разобрать простой пример функции, которая считывает значение числа через prompt и выводит квадрат этого числа в консоль. 
// function getNumPow() {
//   const num = +prompt("Введите число!")
//   console.log(num**2)
// }

// getNumPow()

// Рассмотреть пример функции power, которая получает два аргумента (первый это основание степени, а второй сама степень) и выводит в консоль результат вычислений. 
// function power(a, b) {
//   console.log(a**b)
// }
// // 3 ^ 4
// power(3, 4)

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.
// printMax
// function printMax(a, b) {
//   if (a > b) {
//     console.log(a)
//   } else if(b > a) {
//     console.log(b)
//   }
// }

// printMax(3, 5)
// printMax(5, 3)
// printMax(0, 100)

// ------------- anonymous function -------------

// (function(a, b) {
//   console.log(a + b)
// }(4, 5))

// Переписать функцию power таким образом, чтобы она возвращала результат вычислений
// function power(a, b) {
//   return a**b // 3 ^ 4 = 81
// }
// let res = power(3, 4)
// console.log(res)
// console.log(power(3, 4))

// Описать процесс, используя функцию power, который находит гипотенузу по длине двух катетов (теорема Пифагора).
// function power(a, b) {
//   return a**b // 3 ^ 2 = 9
// }
// // a ** 2 + b ** 2 = c ** 2
// const firstNum = 3
// const secondNum = 4

// let sum = power(firstNum, 2) + power(secondNum, 2) // 9 + 16 = 25
// let c = power(sum, 1/2) // получаем квадратный корень
// console.log(c)

//Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае.
// isEven

// function isEven(num) {
//   // if(num % 2 === 0) {
//   //   return true
//   // } else {
//   //   return false
//   // }

//   return num % 2 === 0

//   // return num % 2 === 0 ? true : false
// }

// console.log(isEven(3))
// console.log(isEven(4))



// ------------- function expression, declaration -------------

// function declaration
console.log(greet("John")) // success
function greet(firstName) {
  return `Hello ${firstName}`
}
// console.log(greet("John"))

// function expression
// console.log(greeting("Anna")) // error
const greeting = function(firstName) {
  return `Hello ${firstName}`
}
console.log(greeting("Anna"))

// method // если значение свойства это функция то свойство называют методом
const person = {
  name: "Jake",
  greet: function(firstName) {
   console.log(`Hello ${firstName}`);
  }
}
person.greet("Jane")

// arrow functions
const power = (a, b) => {
  return a ** b
}
power(3, 4) 