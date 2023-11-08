// ---------------- arrays ----------------
// let arr = [[1, 2, 6, 5, 7], [9, 6, 2, 5, 6]]
// console.log(arr[1][3])
let arr = [4, 6, 12, 0, 36, "Hello", true, 9]
console.log(arr)
console.log(arr[5])
console.log(arr[2])
console.log(arr[105]) // undefined
console.log(arr[arr.length - 1]) // length = длина массива (количество элементов)
arr[5] = "World"

// push pop
arr.push(15, "John", -9, 65) // добавить элементы в массив в конец
console.log(arr)

