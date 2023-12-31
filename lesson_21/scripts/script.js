// // функция которая передается как аргумент другой функции называется callback функцией
// function doWithUserName(firstname, callback) { // firstname = "John" callback = printHello
//   callback(firstname) // printHello("John")
// }

// function printHello(username) { // username = "John"
//   console.log(`Hello ${username}`) // Hello John
// }

// function printBye(username) {
//   console.log(`Bye ${username}`)
// }

// function printHowAreYou(username) {
//   console.log(`How are you ${username}`)
// }

// doWithUserName("John", printHello)

// doWithUserName("John", printHowAreYou)

// doWithUserName("John", printBye)

// ================= tasks =================
// Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.

// function forEach(arr, callback) { // callback = printElem
//   for(let i = 0; i < arr.length; i++) {
//     callback(arr[i]) // printElem(arr[i])
//   }
// }

// function printElem(elem) {
//   console.log(elem)
// }

// function printElemPow(elem) {
//   console.log(elem**2)
// }

// function printEvenElem(elem) {
//   if (elem % 2 === 0) {
//     console.log(elem)
//   }
// }

// const numArr = [5, 16, 1, -6, 25, 15, -63, 48]
// forEach(numArr, printElem)
// // forEach(arr, printElemPow)
// // forEach(arr, printEvenElem)


// ================= addEventListener =================

// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка. Жмак.
// function clicked() {
//   console.log("Clicked")
// }

// const printBtn = document.querySelector(".print_str")
// // printBtn.addEventListener("click", clicked) // когда надо функцию использовать в другом месте кода то создаем её отдельно
// printBtn.addEventListener("click", function() { // когда ненадо функцию использовать в другом месте кода то создаем её сразу внутри аргументов
//   console.log("Clicked")
// })

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.

// const printBtn = document.querySelector(".print_str")
// const pCounter = document.querySelector(".counter")
// 1 способ
// printBtn.addEventListener("click", function() {
//   let counter = +pCounter.innerText
//   counter++
//   pCounter.innerText = counter
// })

// 2 способ
// let counter = 0
// printBtn.addEventListener("click", function() {
//   counter++
//   pCounter.innerText = counter
// })

// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на плюс в консоль выводится число, увеличивающееся на 1, а при нажатии на минус - уменьшившееся на 1.
// *  Для решения 3 задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.

// const btnPlus = document.createElement("button")
// const btnMinus = document.createElement("button")
// btnPlus.innerText = "Plus"
// btnMinus.innerText = "Minus"
// let counter = 0

// btnPlus.addEventListener("click", function() {
//   counter++
//   console.log(counter)
// })

// btnMinus.addEventListener("dblclick", function() {
//   counter--
//   console.log(counter)
// })

// document.body.append(btnPlus, btnMinus)

// ============ event object ============
// предоставляет более подробную информацию про событие
// const btnElem = document.createElement("button")
// btnElem.innerText = "Click"
// btnElem.addEventListener("click", function (event) {
//   console.log('clicked');
//   console.log(event);
// })
// document.body.appendChild(btnElem)

// // keydown 
// document.addEventListener("keydown", function() {
//   console.log("key pressed")
// })

// Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв добавить их в параграф. Для решения этой задачи понадобится использование объекта event.
// const pElem = document.querySelector(".content")
// document.addEventListener("keydown", function(e) {
//   // console.log("key pressed")
//   console.log(e)
//   if(e.key === "Tab") {
//     pElem.innerText += "    "
//   } else if(e.key === 'Backspace') {
//     // "hello" => ["h", "e", 'l', 'l', 'o']
//     let letterArr = pElem.innerText.split("")
//     letterArr.pop() // ["h", "e", 'l', 'l']
//     pElem.innerText = letterArr.join("") // ["h", "e", 'l', 'l'] => "hell"
//   } else {
//     pElem.innerText += e.key
//   }
// })

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки => *****
// const words = [ "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur,", "adipisicing", "elit." ]

// for(let i = 0; i < words.length; i++) {
//   const pElem = document.createElement("p")
//   pElem.innerText = words[i]
//   document.body.append(pElem)

//   pElem.addEventListener("click", function() {
//     pElem.innerText = "*****"
//   })
// }
