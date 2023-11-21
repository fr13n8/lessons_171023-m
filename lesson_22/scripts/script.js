// const pElem = document.querySelector("p")
// // classList коллекция классов html узла
// console.log(pElem.classList)
// // add позволяет добавить новый класс к элементу перечисляя их через запятой
// pElem.classList.add("third_class")
// console.log(pElem.classList)
// // remove позволяет удалить класс элемента перечисляя их через запятой
// pElem.classList.remove("second_class")
// // contains проверка класса на наличие
// console.log(pElem.classList.contains("second_class")) // false
// console.log(pElem.classList.contains("first_class")) // true
// // toggle если класс существует то удаляет его если наоборот то добавляет его
// pElem.classList.toggle("first_class") // т.к. first_class существует toggle его удалит
// pElem.classList.toggle("second_class") // т.к. second_class не существует toggle его добавит

// ==================== tasks ====================
// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
// const numsCardsDiv = document.createElement("div") // <div class="nums_cards">
// numsCardsDiv.classList.add('nums_cards')
// for(let i = 0; i <= 9; i++) {
//   const numCardDiv = document.createElement("div") // <div class="card">i</div>
//   numCardDiv.innerText = i
//   numCardDiv.classList.add('card')
//   numCardDiv.addEventListener("click", function() {
//     // numCardDiv.classList.add("active")
//     // if (numCardDiv.classList.contains("active")) {
//     //   numCardDiv.classList.remove("active")
//     // } else {
//     //   numCardDiv.classList.add("active")
//     // }

//     numCardDiv.classList.toggle("active")
//   })
//   numsCardsDiv.append(numCardDiv)
// }
// document.body.append(numsCardsDiv)

// ==================== style ====================
// const divElem = document.createElement("div")
// divElem.innerText = 'Hello'
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.borderRadius = "50%"
// divElem.style.backgroundColor = "silver"
// divElem.style.display = "flex"
// divElem.style.justifyContent = "center"
// divElem.style.alignItems = "center"
// divElem.style.cursor = "pointer"
// document.body.appendChild(divElem)

// Создать квадратный div и при наведении курсора на него цвет div-а рандомно менять
// const divElem = document.createElement("div")
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.backgroundColor = "silver"
// document.body.appendChild(divElem)

// red green blue silver
// #FAFAFF -> 0 1 2 3 4 5 6 7 8 9 a b c d e f
// rgb(123, 152, 130) -> [0 - 255]
// Math.random() => [0-1)
// Math.floor(254.9) => 254
// Math.ceil(254.1) => 255
// Math.round(254.4) => 254
// Math.round(254.6) => 255

// Math.ceil(Math.random() * 255) -> [0 - 255]

// function getRandomColor() {
//   const red = Math.ceil(Math.random() * 255)
//   const green = Math.ceil(Math.random() * 255)
//   const blue = Math.ceil(Math.random() * 255)
//   const rgb = `rgb(${red}, ${green}, ${blue})`

//   return rgb
// }

// divElem.addEventListener("mouseover", function() {
//   divElem.style.backgroundColor = getRandomColor() 
// })

// divElem.addEventListener("mouseout", function() {
//   divElem.style.backgroundColor = getRandomColor() 
// })

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
// rgb(128, 128, 0)
// rgb(128, 128, 5)
// rgb(128, 128, 10)
// ...
// rgb(128, 128, 255)

for(let i = 0; i <= 255; i += 5) {
  const divElem = document.createElement("div")
  divElem.style.width = "100%"
  divElem.style.height = "2vh"
  divElem.style.backgroundColor = `rgb(128, 128, ${i})`
  document.body.appendChild(divElem)
}