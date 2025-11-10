const btnPresupuesto = document.querySelector('#btnPresupuesto');
const btnGasto = document.querySelector('#btnGasto');
const expenseForm = document.querySelector('#expenseForm');
const budgetForm = document.querySelector('#budgetForm');
const lblPres = document.querySelector('#lblPresupuesto');
const lblTG = document.querySelector('#lblTG');
const lblProm = document.querySelector('#lblProm');
const expensesTable = document.querySelector('tbody');
const budgetDialog = document.querySelector('#budgetDialog');
const expensesDialog = document.querySelector('#expensesDialog');

let presupuesto = 0;
let totalGastado = 0;
let promedio = 0;
let expensesQty = 0;

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function addRow(inData) {

  const row = document.createElement('tr');

  for(prop in inData) {
    const rowData = document.createElement('td');
    rowData.innerText = capitalizeFirstLetter(inData[prop]);
    row.appendChild(rowData);
  }

  expensesTable.appendChild(row);

}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnCancel')) {
    const dialog = e.target.closest('dialog');
    if (dialog) {
      dialog.close();
    }
  }
});

btnPresupuesto.addEventListener('click', () => {
  budgetDialog.showModal();
});

btnGasto.addEventListener('click', () => {
  expensesDialog.showModal();
});

budgetForm.addEventListener('submit', () => {
  const budgetAmt = document.querySelector('#budgetAmt');

  presupuesto = budgetAmt.value;
  lblPres.textContent = `$${presupuesto}`;
  lblPres.style.fontWeight = 'bold';
  btnPresupuesto.disabled = true;
  btnPresupuesto.classList.add('disabled');
  btnGasto.disabled = false;
  btnGasto.classList.remove('disabled');
});

expenseForm.addEventListener('submit', () => {

  let expenseDateIn = document.querySelector('#expenseDate');
  let descriptionIn = document.querySelector('#expenseDescription');
  let categoryIn = document.querySelector('#combo');
  let ammountIn = document.querySelector('#expenseAmt');

  const expense = {
    date: expenseDateIn.value,
    description: descriptionIn.value,
    category: categoryIn.value,
    ammount: ammountIn.value,
  };

  addRow(expense);

  totalGastado += parseFloat(ammountIn.value);
  lblTG.textContent = `$${totalGastado}`;
  lblTG.style.fontWeight = 'bold';

  expensesQty++
  promedio = totalGastado / expensesQty;
  lblProm.textContent = `$${promedio}`;
  lblProm.style.fontWeight = 'bold';

  expenseDateIn.value = '';
  descriptionIn.value = '';
  categoryIn.value = '';
  ammountIn.value = '';

});
