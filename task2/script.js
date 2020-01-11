'use strict';

var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

var firstQuestion = 'Введите обязательную статью расходов в этом месяце';
var secondQuestion = 'Во сколько обойдется?';



for (let i = 0; i < 2; i++) {
    var firstAnswer = prompt(firstQuestion, '');
    var secondAnswer = +prompt(secondQuestion, '');

    if (typeof(firstAnswer) === 'string' && typeof(secondAnswer) != null && typeof(firstAnswer) != null
    && firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
        appData.expenses[firstAnswer] = secondAnswer;
        console.log('done');
    } else {
        i--;
    }
}

// While 


// var i = 0;
// while (i < 2) {
//     var firstAnswer = prompt(firstQuestion, '');
//     var secondAnswer = +prompt(secondQuestion, '');

//     if (typeof(firstAnswer) === 'string' && typeof(secondAnswer) != null && typeof(firstAnswer) != null
//     && firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
//         appData.expenses[firstAnswer] = secondAnswer;
//         console.log('done');
//         i++;
//     }
// }


// do {
//     var firstAnswer = prompt(firstQuestion, '');
//     var secondAnswer = +prompt(secondQuestion, '');

//     if (typeof(firstAnswer) === 'string' && typeof(secondAnswer) != null && typeof(firstAnswer) != null
//     && firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
//         appData.expenses[firstAnswer] = secondAnswer;
//         console.log('done');
//         i++;
//     }
// }while(i < 2);



var days = 30;

appData.moneyPerday = +(appData.budget / days).toFixed(2);


console.log('Ежедневный доход: ' + appData.moneyPerday);


if (appData.moneyPerday < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerday > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
}

