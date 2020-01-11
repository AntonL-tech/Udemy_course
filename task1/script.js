'use strict';

var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money);
console.log(time);

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

var firstAnswer = prompt(firstQuestion, '');
var secondAnswer = +prompt(secondQuestion, '');

appData.expenses[firstAnswer] = secondAnswer;

var days = 30;

alert((appData.budget / days).toFixed(2));