// Select elements
const transactionForm = document.getElementById('transaction-form');
const transactionHistory = document.getElementById('transaction-history');
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const balanceElement = document.getElementById('balance');

let totalIncome = 0;
let totalExpenses = 0;

// Handle form submission
transactionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('transaction-name').value;
  const amount = parseFloat(document.getElementById('transaction-amount').value);
  const type = document.getElementById('transaction-type').value;
  
  // Create a transaction element
  const transactionDiv = document.createElement('div');
  transactionDiv.textContent = `${name}: $${amount.toFixed(2)}`;
  
  // Add appropriate class based on transaction type
  if (type === 'credit') {
    transactionDiv.classList.add('credit');
    totalIncome += amount; // Update total income
  } else if (type === 'debit') {
    transactionDiv.classList.add('debit');
    totalExpenses += amount; // Update total expenses
  }
  
  // Append the transaction to the history
  transactionHistory.appendChild(transactionDiv);
  
  // Update the totals and balance
  updateSummary();
  
  // Reset the form
  transactionForm.reset();
});

// Update the summary (income, expenses, balance)
function updateSummary() {
  const balance = totalIncome - totalExpenses;
  
  totalIncomeElement.textContent = `Total Income: $${totalIncome.toFixed(2)}`;
  totalExpensesElement.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
  balanceElement.textContent = `Balance: $${balance.toFixed(2)}`;
}
