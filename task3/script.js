'use strict';

var money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

var firstQuestion = 'Введите обязательную статью расходов в этом месяце';
var secondQuestion = 'Во сколько обойдется?';

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        var firstAnswer = prompt(firstQuestion, '');
        var secondAnswer = +prompt(secondQuestion, '');
    
        if (typeof (firstAnswer) === 'string' && typeof (secondAnswer) != null && typeof (firstAnswer) != null &&
            firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
            appData.expenses[firstAnswer] = secondAnswer;
            console.log('done');
        } else {
            i--;
        }
    }
}

chooseExpenses();


function chooseOptExpenses() {
    var optExpense;
    for (let i = 1; i < 4; i++) {
        optExpense = prompt('Статья необязательных расходов?', '');

        appData.optionalExpenses[i] = optExpense;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();



function detectDayBudget() {
    appData.moneyPerday = +(appData.budget / 30).toFixed(2);
    console.log('Ежедневный доход: ' + appData.moneyPerday);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerday < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerday > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка');
    }
}

detectLevel();

function checkSavings() {
    if(appData.savings) {
        let save = +prompt('Какова сумма накоплений', '');
        let percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * percent;

        console.log('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
}

checkSavings();