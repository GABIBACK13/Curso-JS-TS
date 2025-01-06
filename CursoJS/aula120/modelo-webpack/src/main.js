import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

const cpf = new GeraCPF();
const cpfGerado = document.querySelector('.cpf-generate');

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('generate-btn')) {
  cpfGerado.innerHTML = cpf.generate();
  }
});