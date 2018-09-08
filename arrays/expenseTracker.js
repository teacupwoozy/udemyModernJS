// Expense -> description, amount
const account = {
    name: "Stacy M",
    expenses: [],
    // addExpense -> two arguements: the description, the amount (add new object on 
    // to expenses array with the correct data)
    addExpense: function (descrip, amount) {
        this.expenses.push({
            description: descrip,
            amount: amount
        })
    },
    // getAccountSummary -> total up all expenses and print msg: "Stacy M has $27 in expenses."
    // use forEach to go through every item in expenses array
    getAccountSummary: function (){
        let totalExpenses = 0
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })

        return `${account.name} has $${totalExpenses} in expenses.`
    }
}



account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
// console.log(account)
console.log(account.getAccountSummary())