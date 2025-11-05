const btnPresupuesto = document.querySelector('#btnPresupuesto');
const btnAddGasto = document.querySelector('#btnAddGasto');
const lblPres = document.querySelector('#lblPresupuesto')

let presupuesto;

btnPresupuesto.addEventListener('click', (event) => {

  event.stopPropagation();

  presupuesto = parseFloat(prompt("Ingresa el presupuesto"));
  console.log(presupuesto);
  lblPres.textContent = `$${presupuesto}`;

  btnAddGasto.disabled = false;
  btnPresupuesto.disabled = true;

});
