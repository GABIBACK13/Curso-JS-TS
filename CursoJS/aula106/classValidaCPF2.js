class CPF {
  constructor(inputedCPF) {
    Object.defineProperty(this, 'cpf', {
      writable: false,
      configurable: false,
      enumerable: true,
      value: inputedCPF.replace(/\D+/g, '')
    })
  }
  checkCPF(CPF = this.cpf) {
    const inputedCPF = CPF;
    if (typeof inputedCPF !== 'string') return false;
    if (inputedCPF[0].repeat(inputedCPF.length) === inputedCPF) return false;
    if (inputedCPF.length !== 11) return false;

    const numbers = Array.from(inputedCPF).slice(0, 9);
    function createDigit(array) {
      let control = array.length +2;
      const total = array.reduce((ac, value) => {
        control--
        return ac += Number(value) * control;
      }, 0);

      let d1 = 11 - (total % 11);
      if (d1 > 9) d1 = 0;
      return d1;
    }

    const d1 = createDigit(numbers);
    numbers.push(d1);
    const d2 = createDigit(numbers);
    numbers.push(d2);
    
    const validCPF = numbers.reduce((ac, value) => ac += value);
    return validCPF === inputedCPF;
  }
}
let cpf = '111.111.111-11';
let cpf1 = new CPF(cpf);
console.log(cpf1.checkCPF());