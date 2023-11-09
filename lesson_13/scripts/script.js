// ---------------- arrays ----------------
// let arr = [[1, 2, 6, 5, 7], [9, 6, 2, 5, 6]]
// console.log(arr[1][3])
// let arr = [4, 6, 12, 0, 36, "Hello", true, 9]
// console.log(arr)
// console.log(arr[5])
// console.log(arr[2])
// console.log(arr[105]) // undefined
// console.log(arr[arr.length - 1]) // length = длина массива (количество элементов)
// arr[5] = "World"

// push pop
// arr.push(15, "John", -9, 65) // добавить элементы в массив в конец
// console.log(arr)

// let lastElem = arr.pop() // pop удаляет и возвращает последний элемент из массива
// console.log(arr)
// console.log(`lastElem = ${lastElem}`)

// ---------------- задача ----------------
// Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.

// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]
// const firstArr = [1, 4, 2, 5, 3]
// const resultArr = []
// resultArr.push(firstArr[0]**2, firstArr[1]**2, firstArr[2]**2, firstArr[3]**2, firstArr[4]**2)
// console.log(resultArr)

// ---------------- for ----------------
// for(начальное значение счетчика; условие выполнения; изменение значение счетчика)
// for(let i = 0; i <= 10; i++) {
//   console.log(i) // 0 1 ... 10
// }

// console.log(i) // i is not defined

// 1) i = i + 1; i = i * 2
// 2) i += 1   ; i *= 2
// 3) i++
// 4) ++i

// ---------------- задача ----------------
// Разобрать пример вывода всех элементов массива при помощи цикла for.
// const arr = [1, 4, 2, 5, 3] // arr[0] arr[1] arr[2] arr[3] arr[4]
// console.log(`arr = ${arr}`);
// for(let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]) // 0 1 2 3 4 ... 8 9 10
// }

// Написать цикл, который выводит только четные числа.
// const arr = [1, 4, -2, 5, 3, -6, 24, 13, 16, 15, 92]
// for(let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// Разобрать синтаксис цикла с изменением i на два, три и так далее.
// for (let i = 0; i < 21; i += 3) { // 0 -> 20
//   console.log(i)
// }
// Разбор синтаксиса цикла от большего к меньшему
// const arr = [1, 4, -2, 5, 3, -6, 24, 13, 16, 15, 92]
// for (let i = arr.length - 1; i >= 0; i -= 1) { // 20 -> 0
//   console.log(arr[i])
// }

// Разбор задачи на поиск агрегации по массиву. На примере суммы всех элементов массива.
const arr = [1, 4, -2, 5, 3, -6, 24, 13, 16, 15, 92]
let sum = 0
for(let i = 0; i < arr.length; i++) { // arr[0] arr[1] 2 3 4 5
  // sum = sum + arr[i]
  sum += arr[i]
}
console.log(`result = ${sum}`)
