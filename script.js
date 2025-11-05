const btnPresupuesto = document.querySelector('#btnPresupuesto');
const btnGasto = document.querySelector('#btnGasto');
const lblPres = document.querySelector('#lblPresupuesto')

const modal = document.querySelector('#myModal');
const closeBtn = document.querySelector('.close');


let presupuesto;

btnPresupuesto.addEventListener('click', () => {

  presupuesto = parseFloat(prompt('Ingresa el presupuesto'));
  lblPres.textContent = `$${presupuesto}`;
  btnGasto.disabled = false;
  btnPresupuesto.disabled = true;

});

btnGasto.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
