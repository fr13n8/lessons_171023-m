// ---------- let, const ----------
// let greeting = "Hello world!"
// const greeting = "Hello world!"
// greeting = "Hi"

// console.log(greeting)


// ---------- naming ----------
// A-Z a-z 0-9 _ $

// let 1person = "John" // error
// let _name = "John"
// let $name = "John"

// car model name
// let car-model-name // kebab case // error
// let car_model_name = "BMW" // snake case
// let carModelName = "BMW" // camel case

// ---------- number, string ----------
// typeof показывает тип данных значения переменной
// let text = "Hello"
// let num1 = 5
// let num2 = -5
// let num3 = 5.06
// console.log(text, num1, num2, num3)
// console.log(typeof text)
// console.log(typeof num1)
// console.log(typeof num2)
// console.log(typeof num3)

// ---------- math operators ----------
// let a = 5
// let b = 3
// console.log(a + b) // сложение
// console.log(a - b) // вычитание
// console.log(a * b) // умножение
// console.log(a / b) // деление
// console.log(a % b) // получить остаток от деления
// console.log(a ** b) // возведение в степень

// ---------- prompt ----------
// prompt создает модальное окно чтобы забрать какие-то значения от пользователя
let userName = prompt("Напишите своё имя.")
console.log("Hello " + userName)