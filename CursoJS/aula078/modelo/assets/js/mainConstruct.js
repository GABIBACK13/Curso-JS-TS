function Calc() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.clickBtn();
        this.pressEnter();
    }

    this.clickBtn = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.delLastChar();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) this.realizaConta();
        });
    }

    this.btnToDisplay = (valor) => {
        this.display.value += valor;
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.delLastChar = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta && typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    }
}
const calculadora = new Calc();
calculadora.init();