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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            var firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
            var secondAnswer = +prompt('Во сколько обойдется?', '');
        
            if (typeof (firstAnswer) === 'string' && typeof (secondAnswer) != null && typeof (firstAnswer) != null &&
                firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
                this.expenses[firstAnswer] = secondAnswer;
                console.log('done');
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function() {
        var optExpense;
        for (let i = 1; i < 4; i++) {
            optExpense = prompt('Статья необязательных расходов?', '');
    
            this.optionalExpenses[i] = optExpense;
            console.log(this.optionalExpenses);
        }
    },
    detectDayBudget: function () {
        this.moneyPerday = +(this.budget / 30).toFixed(2);
        console.log('Ежедневный доход: ' + this.moneyPerday);
    },
    detectLevel: function () {
        if (this.moneyPerday < 100) {
            console.log('Минимальный уровень достатка');
        } else if (this.moneyPerday > 100 && this.moneyPerday < 2000) {
            console.log('Средний уровень достатка');
        } else if (this.moneyPerday > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if(appData.savings) {
            let save = +prompt('Какова сумма накоплений', '');
            let percent = +prompt('Под какой процент?', '');
    
            this.monthIncome = (save / 100 / 12 * percent).toFixed(2);
    
            console.log('Доход в месяц с вашего депозита: ' + this.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что может принести дополнительный доход? (Перечислите через запятую)', '');
        if (items != '' && typeof(items) === 'string') {
            this.income = items.split(', ');
            this.income.push(prompt('Может что-то еще?', ''));
            this.income.sort();
        } else {
            this.chooseIncome();
        }
        this.income.forEach(function(elems, i) {
            console.log('Способы доп. заработка: ' + (i+1) + '. ' + elems);
        });
    }
};

appData.chooseIncome();

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}