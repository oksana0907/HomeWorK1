let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomevalue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('manthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yeqrsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = Document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optonalExpensesItem = document.querySelectorAll('.optaonalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt('Введите дату в формате YY-MM-DD');


    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

 start();

 let appData = {
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    savings: true,
    
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt("Во сколько обойдется?",'');
    
            if ( typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != ' ' && a.length < 50) {
                console.log('done');
    
                appData.expenses[a] = b;
            }    else {
                i = i - 1;
            } 
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "руб");
    }, 
    detectLevel: function () {

        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц:" +appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++){
            let questionOptExpebses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpebses;
            console.log(appData.optionalExpenses); 
                
         }
    }, 
    chooseIncome: function () {
        let items  = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        if (typeof(items) != "string" || items == "" || typeof(items) == null){
            console.log("Вы ввели некорректные данные");
        }else{

        appData.income = items.split(',' );
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        }

        appData.income.forEach (function (itemsmassive, i){
            alert("Способы доп.заработка:" + (i+1) + " - " + itemsmassive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

