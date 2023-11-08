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
// let userName = prompt("Напишите своё имя.")
// console.log("Hello " + userName)

// ---------- string ----------
// let firstName = "John"
// let lastName = "Doe"
// let age = 30
// // конкатенация
// let fullName = firstName + " " + lastName + '. Age: ' + age // "John" + " " + "Doe" = John Doe
// // интерполяция
// fullName = `${firstName} ${lastName}. Age: ${age}`
// console.log(fullName)

// ---------- type convert ----------
// let stringNum = "5"
// let firstNum = Number(stringNum)
// let secondNum = +stringNum
// console.log(`Type of stringNum = ${typeof stringNum}`)
// console.log(`Type of firstNum = ${typeof firstNum}`)
// console.log(`Type of secondNum = ${typeof secondNum}`)
// console.log(stringNum, firstNum, secondNum)

// let num = 5
// let numString = String(num)
// console.log(`Type of num = ${typeof num}`)
// console.log(`Type of numString = ${typeof numString}`)
// console.log(num, numString)

// let str = "Hello"
// let strNum = +str
// console.log(`strNum = ${strNum}`) // NaN = Not a Number
// console.log(`type of NaN = ${typeof strNum}`) // number (потому что это результат математических вычеслений)

// ---------- неявное преобразование типов ----------
// "5" + 2 = "5" + "2" = "52"
// "hello" + 2 = "hello" + "2" = "hello2"
// "5" - 2 = 5 - 2 = 3
// "hello" - 2 = NaN - 2 = NaN

// ---------- tasks ----------
// Есть переменные r, g, b с числовыми значениями. 
// Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию.
// const r = 12
// const g = 34
// const b = 14

// let result = "rgb(" + r + ", " + g + ", " + b + ")"
// console.log(result);
// result = `rgb(${r}, ${g}, ${b})`
// console.log(result);

// 'b' + +'a' + +'c'
// 'ba' + NaN
// 'ba' + 'NaN'
// 'baNaN'

// Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
// const num = +prompt("Введите число")
// console.log(num ** 2)

// Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забыть преобразовать полученные значения в число.
// let firstNum = +prompt("Введите первое число")
// let secondNum = +prompt("Введите второе число")
// console.log(firstNum + secondNum)

// ---------- if-else ----------

// let num = 7
// == слабое равенство, происходит неявное преобразование
// === строгое равенство, изначально сравнивает типы данных
// > больше
// < меньше
// >= больше или равно
// <= меньше или равно
// !== неравенство

// string == number | string == string | "0" == "0" | true
// string === number | false
// if (num !== 0) {
//   console.log("не равно нулю")
// } else if (num < 0) {
//   console.log("меньше нуля")
// } else if (num > 0){
//   console.log("больше нуля")
// }

// ---------- tasks ----------
// Написать программу, которая получает два числа и выводит наибольшее.
// let firstNum = +prompt("Введите первое число")
// let secondNum = +prompt("Введите второе число")

// if (firstNum > secondNum) {
//   console.log(firstNum);
// } else {
//   console.log(secondNum);
// }

// "3" > "123" = true
// ascii 3 = 51
// ascii 1 = 49
// 51 > 49 = true

// Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю”.
// let num = +prompt("Введите число") // NaN
// if (num === 0) {
//   console.log("число равно нулю")
// } else if (num < 0) {
//   console.log("число отрицательное")
// } else {
//   console.log("число положительное")
// }

// ---------- isNaN ----------
console.log(isNaN("hello")) // true
console.log(isNaN("123")) // false
console.log(isNaN("e123")) // true
console.log(isNaN(123)) // false
console.log(isNaN(NaN)) // true