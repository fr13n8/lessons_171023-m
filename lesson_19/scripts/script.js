// =========== createElement, append ===========
// const bodyElem = document.querySelector("body") === document.body
// const headElem = document.querySelector("head") === document.head
// const htmlElem = document.querySelector("html") === document.documentElement
// bodyElem.append(newDiv)
// document.body.append(newDiv) // Добавить newDiv после всех дочерных элементов body

// const newDiv = document.createElement("div") // <div></div>
// console.log(newDiv)
// newDiv.innerText = "Hello world!" // <div>Hello world!</div>

// const pElem = document.createElement("p") // <p></p>
// pElem.innerText = "Lorem ipsum dolor sit amet consectetur" // <p>...</p>

// newDiv.append(pElem) // <div>Hello world!<p>...</p></div>

// // document.body.append(newDiv, pElem)

// document.body.append(newDiv)

// const resultElem = document.body.appendChild(newDiv) // принимает всего лишь один элемент и возвращает его же

// =========== prepend ===========
// const aElem = document.createElement("a") // <a></a>
// aElem.innerText = 'Tel-ran' // <a>Tel-ran</a>
// aElem.setAttribute("href", 'https://tel-ran.de/') // <a href='https://tel-ran.de/'>Tel-ran</a>
// aElem.target = "_blank" // <a href='href' target='_blank'>Tel-ran</a>
// document.body.prepend(aElem) // Добавить aElem до всех дочерных элементов body

// const aSecond = aElem.cloneNode(true) // клонирование html элемента
// console.log(aSecond);
// document.body.append(aSecond)


// =========== tasks ===========

/*
tag name = img
class name = .image
id name = #image
*/

// Создать параграф, задать ему текст и добавить в HTML-документ в div с #root
// const newPElem = document.createElement("p") // <p></p>
// newPElem.innerText = "Paragraph from javascript" // <p>Paragraph from javascript</p>
// const rootDiv = document.querySelector("#root") // получаем div куда надо добавить элемент
// rootDiv.append(newPElem) // добавляем элемент в div с id root

// Создать множество параграфов с числами от 0 до 19. И добавить все параграфоы в div с #root.
// const rootDiv = document.querySelector("#root")
// for(let i = 0; i <= 19; i++) {
//   console.log(i); // 0 1 2 3 ... 19
//   const newPElem = document.createElement("p") // <p></p>
//   newPElem.innerText = i // <p>i</p>
//   rootDiv.append(newPElem)

//   // rootDiv.innerHTML += `<p>${i}</p>`
// }

// Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root

// const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]
// const rootDiv = document.querySelector("#root")
// for(let i = 0; i <= strArray.length - 1; i++) {
//   console.log(i); // 0 1 2 3 ... 19
//   const newPElem = document.createElement("p") // <p></p>
//   newPElem.innerText = strArray[i] // <p>i</p>
//   rootDiv.append(newPElem)

//   // rootDiv.innerHTML += `<p>${i}</p>`
// }

// Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую) и формирует в интерфейсе картинку и внизу ссылку, указанную пользователем.

// const blockDiv = document.querySelector(".block")

// const imgSrc = prompt("Введите ссылку на картинку")
// const aHref = prompt("Введите ссылку на сайт")

// const imgElem = document.createElement("img") // <img>
// imgElem.src = imgSrc
// imgElem.alt = 'Post image' // <img src={imgSrc} alt='Post image'>

// const aElem = document.createElement("a") // <a></a>
// aElem.href = aHref // <a href={aHref}></a>
// aElem.innerText = 'Click me' // <a href={aHref}>Click me</a>

// blockDiv.append(imgElem, aElem)
// // blockDiv.innerHTML = ` // xss
// // <img src=${imgSrc} alt='Post image'>
// // <a href=${aHref}>Click me</a>
// // `


// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #links.
/* 
<a href="https://facebook.com" target="_blank">facebook</a>
<a href="https://youtube.com" target="_blank">youtube</a>
<a href="https://google.com" target="_blank">google</a>
<a href="https://github.com" target="_blank">github</a> 
*/
const links = [
    {
        link: "https://google.com",
        title: "Google"
    },
    {
        link: "https://facebook.com",
        title: "Facebook"
    },
    {
        link: "https://github.com",
        title: "GitHub"
    },
    {
        link: "https://youtube.com",
        title: "YouTube"
    }
]
const divLinks = document.querySelector("#links")
for (let i = 0; i < links.length; i++) {
  const aElem = document.createElement('a') // <a></a>
  aElem.href = links[i].link // <a href={links[i].link}></a>
  aElem.innerText = links[i].title // <a href={links[i].link}>links[i].title</a>

  const br = document.createElement("br")
  divLinks.append(aElem, br)
}