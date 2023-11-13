// const person = ['John', 'Doe', 35, 1200, 'Europe']
// console.log(`First name ${person[0]}`)
// console.log(`Last name ${person[1]}`)

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 35,
//   salary: 1200,
//   address: 'Europe',
//   'Car model name': "BMW",
//   carModelName: "BMW"
// }

// console.log(`First name ${person['firstName']}`)
// console.log(`Last name ${person['lastName']}`)
// console.log(`Car model name ${person['Car model name']}`)
// console.log(`Age of person ${person.age}`)
// console.log(`Salary of person ${person.salary}`)
// console.log(`Car of person ${person.carModelName}`)

// console.log(`City ${person.city}`)

// person.age = 40
// console.log(`Age of person ${person.age}`)
// person.city = 'Berlin'
// console.log(`City ${person.city}`)
// console.log(person);

// --------------- задача ---------------
// Создать объект с названием и ценой продукта и вывести данные в консоль.
// const product = {
//   title: 'Macbook',
//   price: 2000
// }
// console.log(`Name of product ${product.title}`)
// console.log(`Price of product ${product.price}`)

// --------------- array of objects ---------------
const users = [
  // 0
  {
    id: 1,
    name: "John",
    age: 25
  },
  // 1
  {
    id: 2,
    name: 'Mary',
    age: 20
  },
  // 2
  {
    id: 3, // 0
    name: `Bob`, // 1
    age: 23 // 2
  }
]

// {
//   ключ / название свойства : значение,
// }

for(let i = 0; i < users.length; i++) { // 0 1 2
  // let user = users[i]
  // деструктуризация
  // let {перечисляем через запятой названия свойств чьи значения хотим забрать} = переменная где хранится объект
  const {name:firstName, age} = users[i]
  // const firstName = name
  console.log(`Name of user ${firstName} and age ${age}`)
}

// let arr = [0, 1, 2, 3]
// const [a, b, c, d] = arr
// a = 0; b = 1; c = 2; d = 3

let id = Symbol("id")

const user = {
  id: 1,
  [id]: 2
}

console.log(user[id]) // 2
console.log(user.id) // 1

// --------- ссылочный тип
let obj = {a: 1, b: 2} // в переменной obj хранится адрес до этого объекта || пр. 0x004aa0dgh
let secondObj = obj // в переменной secondObj тоже хранится адрес до этого объекта || пр. 0x004aa0dgh
obj = "Hello world" // переопределение значания переменной obj || пр. 0x003SD54G
console.log(secondObj, obj)

let thirdObj = {...secondObj} // клонирование объекта с помощью оператора spread
let thirdObj2 = structuredClone(secondObj) // клонирование объекта с помощью функции structuredClone