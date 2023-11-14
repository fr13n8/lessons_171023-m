// ----------- var let const -----------
// var text
// var num
// function hello() {
//   var text = 'hello' // var работает правильно только внутри функций
//   console.log(text)
// }
// console.log(text)
// hello()
// console.log(text)

// область видимости определяется фигурными скобками

// console.log(text) // let = text is not defined || var = undefined из-за всплытия

// if (1 == 1) {
//   var text = 'hello'
//   console.log(text) // hello - success
// }

// console.log(text) // let = error; var = hello (потому что вар не видит эту область видимости)

// hoisting - всплытие (var, function declaration)

// var не имеет области видимости, при создании переменной с помощью var срабатывает hoisting. Область видимости у вар ограничивается только фигурными скобками функций

// var позваляет пересоздать одну и ту же переменную 
// var num = 5
// var num = 6

// closure

// function createCounter() {
//   let index = 0
//   console.log(index) // 0

//   // дочерная функция-замыкание - то-есть замыкает в себе контекст(область видимости) выполнения
//   // возваращем эту фунцию с контекстом как результат выполнения функции
//   return function incr() {
//     index = index + 1
//     console.log(index)
//   }
// }

// const increment = createCounter()
// increment() // 1 // меняем значение переменной index из функции createCounter
// increment() // 2
// increment() // 3

// ====================================================================================
// tasks


// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
// function createArrFromRange(a, b) { // a = 10 b = 20
//   let arr = []
//   let min = a // предполагаем что a минимальное значение
//   let max = b // предполагаем что b максимальное значение
//   if (a > b) { // проверяем, если мы были не правы то меняем значения местами
//     min = b
//     max = a
//   }

//   for(let i = min; i <= max; i++) { // вставляем min max в свои места
//     arr.push(i)
//   }

//   return arr
// }

// let result = createArrFromRange(10, 20)
// console.log(result)
// console.log(createArrFromRange(20, 10))

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 
// function createArrFromRange(a, b) { // a = 10 b = 20
//   if (a === b) { // проверяем вдруг если a равно b то возвращаем пустой массив
//     return []
//   }
//   let arr = []
//   let min = a // предполагаем что a минимальное значение // 10
//   let max = b // предполагаем что b максимальное значение // 20
//   if (a > b) { // проверяем, если мы были не правы то меняем значения местами
//     min = b
//     max = a
//   }

//   for(let i = max; i >= min; i--) { // вставляем min max в свои места
//     arr.push(i)
//   }

//   return arr
// }

// let result = createArrFromRange(10, 20)
// console.log(result)
// console.log(createArrFromRange(20, 10))
// console.log(createArrFromRange(10, 10))

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// let list = [4, 6, 9, -5, -23, 24, 20, 36, 852, -42]
// let sum = 0
// let positiveSum = 0

// for (let i = 0; i < list.length; i++) {
//   sum = sum + list[i]
//   if (list[i] >= 0) {
//     positiveSum = positiveSum + list[i]
//   }
// }

// console.log(`positiveSum = ${positiveSum}, sum = ${sum}`);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// let list = [4, 6, 9, -5, -23, 24, 20, 36, 852, -42]
// let evenSum = 0
// let oddSum = 0

// for(let i = 0; i < list.length; i++) {
//   if (list[i] % 2 === 0) {
//     evenSum += list[i]
//   } else {
//     oddSum += list[i]
//   }
// }

// let sum = evenSum - oddSum
// console.log(sum)

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// let list = [4, 6, 9, -5, -23, 24, 20, 36, 852, -42]

// function inspectArray(arr) {
//   let min = arr[0]
//   let max = arr[0]

//   let sum = 0

//   for(let i = 0; i < arr.length; i++) {
//     if(min > list[i]) {
//       min = list[i]
//     }

//     if(max < list[i]) {
//       max = list[i]
//     }

//     sum += list[i]
//   }

//   let avg = sum / arr.length

//   return {
//     min: min,
//     // если название свойства совпадает с названием переменной можно написать вот таким образом
//     max,
//     avg
//   }
// }

// let result = inspectArray(list)
// console.log(result)

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// let word = "Hello world!" // olleh
// let reversed = ''
// for(let i = word.length - 1; i >= 0; i--) {
//   reversed = reversed + word[i]
// }
// console.log(reversed)

// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// "anna" "казак" "оно" 

// function isPalindrome(word) {
//   let reversed = ''
//   for(let i = word.length - 1; i >= 0; i--) {
//     reversed = reversed + word[i]
//   }

  // if (word === reversed) {
  //   console.log("явялется палиндромом")
  //   return true
  // } else {
  //   return false
  // }

//   return word === reversed
// }

// console.log(isPalindrome("anna"));
// console.log(isPalindrome("hello"));

// 

const goods = [
  {
      id: 1,
      title: "bicycle",
      price: 45000,
      discount: 10
  },
  {
      id: 2,
      title: "roller-skates",
      price: 15000,
      discount: 5
  },
  {
      id: 3,
      title: "kick scooter",
      price: 10000,
      discount: 30
  },
  {
      id: 4,
      title: "skis",
      price: 25000,
      discount: 10
  },
  {
      id: 5,
      title: "skate",
      price: 10000,
      discount: 0
  }
]

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// skate (10000)

for(let i = 0; i < goods.length; i++) {
  const {title, id, price} = goods[i]
  console.log(`${id}) ${title} (${price})`)
}