const tasks = new Array ('Купить ботинки','Помыть полы','Постирать майку','Занести ключи','Записаться к врачу')
const searchTask = 'Занести ключи'

//1.кол-во задач
console.log(tasks.length)

//2.проверить список
if(tasks !== 0){
console.log("Массив не пустой")
}

else{
    console.log("Массив пустой")
}

//3.найти задачу
if(tasks.includes(searchTask)){
    console.log("Такой эелмент есть!")
}

else{
    console.log("Такого элемента нет!")
}

//4.првоерить кол-во
if(tasks.length > 3){
    console.log("Много задач!")
}

else if(tasks.length == 3){
    console.log("Задач ровно 3")
}

else{
    console.log("Задач мало!")
}

//5.првоерить первую задачу
if(tasks[0] == "Купить ботинки"){
    console.log("Первая задача верна!")
}

else{
    console.log("Первая задача отличается!")
}

//6.првоерить результат
console.log(tasks)