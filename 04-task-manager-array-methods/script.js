const tasks = new Array('купить хлеб','купить самокат','купить батон')
//1.вывести массив
console.log(tasks)
//2.добавит задачу в конец
tasks.push('сьесть яблоко')
console.log(tasks);
//3.добавить задачу в начало
tasks.unshift('починить часы')
console.log(tasks);
//4.удалить первую задачу
tasks.shift()
console.log(tasks)
//5.удалить последнюю задачу
tasks.pop()
console.log(tasks)
//6.посчитать задачи
console.log(tasks.length)
//7.вывести вторую задачу
console.log(tasks[1])
//8.проверить наличие задачи
console.log(tasks.includes('купить хлеб'))