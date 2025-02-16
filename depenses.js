// Initialisation des données
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
updateUI();

// Formulaire d'ajout de dépense
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    if (type && !isNaN(amount) && amount > 0) {
        const newExpense = { type, amount };
        expenses.push(newExpense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateUI();
        this.reset();
    } else {
        alert('Veuillez entrer des informations valides.');
    }
});

// Mettre à jour l'interface utilisateur
function updateUI() {
    const expenseList = document.getElementById('expense-list');
    const totalExpensesElement = document.getElementById('total-expenses');

    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'expense-item';
        li.textContent = `${expense.type}: ${expense.amount} DT`;
        expenseList.appendChild(li);

        total += expense.amount;
    });

    totalExpensesElement.textContent = `Total des dépenses : ${total.toFixed(2)} DT`;

    // Mettre à jour le total global sur la page d'accueil
    updateGlobalTotal(total);
}

// Mettre à jour le total global
function updateGlobalTotal(total) {
    if (document.referrer.includes('index.html')) {
        const globalTotalElement = document.getElementById('global-total');
        if (globalTotalElement) {
            globalTotalElement.textContent = `${total.toFixed(2)} DH`;
        }
    }
}