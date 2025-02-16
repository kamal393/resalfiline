// Mettre à jour le total global sur la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    const globalTotalElement = document.getElementById('global-total');
    if (globalTotalElement) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        globalTotalElement.textContent = `${total.toFixed(2)} DH`;
    }
});