// Expense -> description, amount
const account = {
    name: "Stacy M",
    expenses: [],
    income: [],
    // addExpense -> two arguements: the description, the amount (add new object on 
    // to expenses array with the correct data)
    addExpense: function (descrip, amount) {
        this.expenses.push({
            description: descrip,
            amount: amount
        })
    },
    // Set up and addIncome method whish will take in: desscription, amount
    addIncome: function (descrip, amount) {
        this.income.push({
            description: descrip,
            amount: amount
        })
    },
    // getAccountSummary -> total up all expenses and print msg: "Stacy M has $27 in expenses."
    // use forEach to go through every item in expenses array
    getAccountSummary: function (){
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        return `${account.name} has a balance of $${totalIncome - totalExpenses}, with $${totalExpenses} in expenses and a total income of $${totalIncome}.`
    },
    

}

account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
account.addIncome("Job", 1000)
account.addIncome("hustle", 225)
// console.log(account)
console.log(account.getAccountSummary())