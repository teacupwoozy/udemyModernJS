// let myAccount = {
//     name: "Stacy",
//     expenses: 0,
//     income: 0
// }

// let addExpense = function (account, amount) {
//     account.expenses = account.expenses + amount
// }

// addExpense(myAccount, 2.50)
// console.log(myAccount)

// ==CHALLENGE==

let account = {
    name: "Stacy",
    income: 0,
    expense: 0,
    balance: 0
}
// addIncome
let addIncome = function(account, income){
    account.income = account.income + income
}

let addExpense = function (account, amount) {
    account.expense = account.expense + amount
}

// Combo
// let changeBalance = function(account, income, expense){
//     account.income = account.income + income
//     account.expense = account.expense + expense
//     account.balance = account.balance + income - expense
// }

// changeBalance(account, 400, 100)

// resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expense = 0
}

// getAccountSummary (balance and total expenses and income)
let getAccountSummary = function(account){
    let balance = account.income - account.expense
    return `On ${account.name}'s account, the balance is $${balance} with an income of $${account.income} and expenses of $${account.expense}.`
}

addIncome(account, 2000)
addExpense(account, 25)
addExpense(account, 10)
console.log(getAccountSummary(account))
resetAccount(account)
console.log(getAccountSummary(account))