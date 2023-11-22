// const formElem = document.querySelector("form")
// const nameInputElem = document.querySelector(".name_input")
// nameInputElem.value = значение которое ввел пользователь
// submit событие отправки данных на сервер
// e.preventDefault() отменяет действие по умолчанию
// formElem.addEventListener("submit", function (e) {
//   e.preventDefault()
//   console.log("submitted")
//   console.log(nameInputElem.value)
// })

// в данном случае действие по умолчанию это открытие ссылки
// preventDefault отменяет это действие
// document.querySelector('a').addEventListener("click", function (e) {
//   e.preventDefault()
// })

// const formElemWithName = document.forms.first_form
// console.log(formElemWithName)

// 1) Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// 2) Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.
// {
//   title: "Macbook",
//   price: 2000
// }
// products
const formElem = document.querySelector("#product_form")
const productNameInput = document.querySelector(".product_name_input")
const productPriceInput = document.querySelector(".product_price_input")

const products = []
formElem.addEventListener("submit", function(e) {
  e.preventDefault()
  // console.log(productNameInput.value)
  // console.log(productPriceInput.value)
  const product = {
    title: productNameInput.value,
    price: +productPriceInput.value
  }

  products.push(product)
  rerender()

  formElem.reset() // очищает значение инпутов которые находятся внутри формы formElem
})

// Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.
function createProductCard({title, price}) { // let {title, price} = product
  const pTitle = document.createElement('p')
  pTitle.innerText = title
  const pPrice = document.createElement('p')
  pPrice.innerText = price
  const productCard = document.createElement('div')
  productCard.classList.add("product_card")

  productCard.append(pTitle, pPrice)

  return productCard
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Вызвать rerender при добавлении нового продукта.
function rerender() {
  const productsListDiv = document.querySelector(".products_list_container")
  productsListDiv.innerHTML = "" // очищаем контейнер с карточками
  for(let i = 0; i < products.length; i++) {
    const productCardElem = createProductCard(products[i])
    productsListDiv.append(productCardElem)
  }
}