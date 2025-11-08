const btnPresupuesto = document.querySelector('#btnPresupuesto');
const btnGasto = document.querySelector('#btnGasto');

const expenseForm = document.querySelector('#expenseForm');
const budgetForm = document.querySelector('#budgetForm');

const lblPres = document.querySelector('#lblPresupuesto');
const lblTG = document.querySelector('#lblTG');
const lblProm = document.querySelector('#lblProm');

const expensesModal = document.querySelector('#expensesModal');
const budgetModal = document.querySelector('#budgetModal');

const anyModal = document.querySelector('.modal');


const closeBtn = document.querySelector('.close');

const cancelBtn = document.querySelector('#cancelBtn');
const saveBtn = document.querySelector('#saveBtn');

const expensesTable = document.querySelector('table');


let presupuesto = 0;
let totalGastado = 0;
let promedio = 0;
let expensesQty = 0;


function addRow(inData) {

  const row = document.createElement('tr');

  for(prop in inData) {
    const rowData = document.createElement('td');
    rowData.innerText = inData[prop];
    row.appendChild(rowData);
  }

  expensesTable.appendChild(row);

}

btnPresupuesto.addEventListener('click', () => {
 budgetModal.style.display = 'block';
});

btnGasto.addEventListener('click', () => {
  expensesModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  anyModal.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
  anyModal.style.display = 'none';
});

budgetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const budgetAmt = document.querySelector('#budgetAmt');
  presupuesto = budgetAmt.value;
  lblPres.textContent = `$${presupuesto}`;
  anyModal.style.display = 'none';
})

expenseForm.addEventListener('submit', (event) => {

  // dont refresh the webpage after submitting.
  event.preventDefault();

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

  expensesQty++
  promedio = totalGastado / expensesQty;
  lblProm.textContent = `$${promedio}`;

  expenseDateIn.value = '';
  descriptionIn.value = '';
  categoryIn.value = '';
  ammountIn.value = '';

  anyModal.style.display = 'none';

});
