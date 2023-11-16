// document это объект для работы с DOM деревом

// =========== querySelector ===========
// querySelector метод который позваляет получит любой элемент из DOM дерева с помощью указателя
// querySelector возвращает первый элемент
// const pElem = document.querySelector("p")
// console.log(pElem)

// const secondPElem = document.querySelector(".second_p")
// innerText текстовой контент элемента
// console.log(secondPElem.innerText)
// secondPElem.innerText = "Hello from javascript"

// =========== querySelectorAll ===========
// querySelectorAll возвращает коллекцию узлов (NodeList)
// const pElems = document.querySelectorAll("p")
// console.log(pElems)

// for(let i = 0; i < pElems.length; i++) {
//   console.log(pElems[i])
//   pElems[i].innerText = "Hello from javascript"
// }
// push, pop, shift, unshift
// 1) методы массивов не работают на NodeList
// 2) коллекции могут быть живыми, реагировать на изменения DOM дерева
// 3) NodeList предоставляется средой выполнения браузера а Array(массивы) встроен в javascript

// Написать программу, которая находит параграфы по классу и заменяет в каждом из них текст на “привет”.

// const secondPElems = document.querySelectorAll(".second_p")
// for (let i = 0; i < secondPElems.length; i++) {
//   secondPElems[i].innerText = "привет"
// }

// поменять текст параграфа с классом p_world на "World" который находится внутри элемента с классом container

// const pWorld = document.querySelector(".container .p_world")
// pWorld.innerText = "World"

// =========== innerHTML ===========
// innerHTML возвращает весь html контент в виде строки
// const divContainer = document.querySelector(".container")
// divContainer.innerHTML = '<a style="color: green;" href="https://tel-ran.de/" target="_blank">Tel-ran</a> <br> <a style="color: blue;" href="https://tel-ran.de/" target="_blank">Tel-ran 2</a>'

// получить имя пользователя с помощью prompt и добавить внутри параграфа текст `Hello username`.
// const userName = prompt("Напишите своё имя")
// const pGreet = document.querySelector(".greet")
// pGreet.innerText = `Hello ${userName}`

// =========== attributes ===========
// setAttribute позволяет добавить или же менять значение атрибутов
// getAttribute позволяет получить значение атрибута по названию

// const aElem = document.querySelector(".first_link")
// console.log(aElem.href);
// // aElem.href = "https://google.com"
// aElem.setAttribute("href", "https://google.com")
// aElem.setAttribute("data-status", "active")
// console.log(aElem.getAttribute("data-status"))

// const imgElem = document.querySelector("img")
// console.log(imgElem.src);
// // imgElem.src = "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/03/shutterstock_1536573389.jpg"
// imgElem.setAttribute("src", "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/03/shutterstock_1536573389.jpg")

// Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение. (https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/03/shutterstock_1536573389.jpg)

// const imgElems = document.querySelectorAll(".main img")
// for (let i = 0; i < 5; i++) {
//   // imgElems[i].setAttribute("src", "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/03/shutterstock_1536573389.jpg")
//   imgElems[i].src = "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/03/shutterstock_1536573389.jpg"
// }

// Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
const aLinks = document.querySelectorAll("a")
const hrefValues = []
for(let i = 0; i < aLinks.length; i++) {
  const hrefValue = aLinks[i].href
  hrefValues.push(hrefValue)
}
console.log(hrefValues)