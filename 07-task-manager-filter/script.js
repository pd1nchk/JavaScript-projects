let tasks = new Array('Сьесть суп','Помыть машину','Забронировать столик','Деньги снять','Куклу купить','Задачу решить')

//1. отфильтровать по названию
let result = tasks.filter(task => task.includes("Деньги"))
console.log(result)

//2. отфильтрвоать по длине > 12
let result2 = tasks.filter( task => task.length > 12 )
console.log(result2)

//3. отфильтровать по длине меньше 12 и больше 9
let result3 = tasks.filter(task => task.length < 12 && task.length > 9)
console.log(result3)