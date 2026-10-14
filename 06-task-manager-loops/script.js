const tasks = new Array('Купить стол','отремонтировать Volvo','Купить сигареты','прочитать статью','снять ролик','уехать далеко')
//1.вывести задачи
for(let i = 0; i < tasks.length; i++){
    
    console.log(tasks[i])
}
//2.вывести задачи с номерами
for(let i = 0; i < tasks.length; i++){
console.log(`${i+1}.` + tasks[i])
}
//3.посчитать задачи
let counter = 0
for(let task of tasks){
    counter++
    console.log(counter)
}
console.log(counter)

//4.найти задачи
for(let task of tasks){
    if(task == 'Купить сигареты'){
        console.log("Такая задача есть")
    }
}

//5.посчитать длинные названия
let lengthCounter = 0
for(let task of tasks){
    if(task.length > 12){
        lengthCounter++
    }
}
console.log(lengthCounter)

//6.вывести задачи по условию
for(let task of tasks){
    if(task.includes("Купить")){
        console.log(task)
    }
}