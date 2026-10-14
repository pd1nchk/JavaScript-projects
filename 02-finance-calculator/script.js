let income = 30000;
let expenses = 50000;
let balance = income - expenses;
    if(balance > 0){
            console.log(`Бюджет положительный! Остаток по счету: ${balance}`);
    }
 
    else if(balance == 0){
            console.log(`Баланс:${balance}`);
            
    }
    else{
            console.log(`БЮДЖЕТ ОТРИЦАТЕЛЬНЫЙ! Задолженность:${balance}`);

    }
    //в данной задаче я создла калькуцлятор подсчета баланса, использовав конструкцию if.. else if.. else