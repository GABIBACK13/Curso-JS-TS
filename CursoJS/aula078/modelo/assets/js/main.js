function createCalc() {
  return {
    display : document.querySelector('.display'),
    
    get iniciar() {
      this.consoleNumbers;
    },

    get consoleNumbers() {
      document.addEventListener('click', (e) => {
        let element = e.target;
        if (element.classList.contains('btn-num')) {
          this.display.value += element.innerText;
        }
        if (element.classList.contains('btn-clear')) {
          this.display.value = '';
        }
        if (element.classList.contains('btn-del')) {
          this.display.value = this.display.value.slice(0, -1);
        }
        if (element.classList.contains('btn-eq')) {
          this.calcule;
        }
      })
    },

    get calcule() {
      try {
        if(eval(this.display.value) && typeof(eval(this.display.value)) === 'number') {
          this.display.value = eval(this.display.value);
        } else {alert('conta inválida')}
      } catch (error) {
        alert('conta inválida');
      }
    }
  }
}
const calculadora = createCalc();
calculadora.iniciar;