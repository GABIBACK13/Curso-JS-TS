export default class CPF {
  constructor(inputedCPF) {
    Object.defineProperty(this, 'cpf', {
      writable: false,
      configurable: false,
      enumerable: true,
      value: inputedCPF.replace(/\D+/g, '')
    })
  }

  static createDigit(array) {
    let control = array.length +2;
    const total = array.reduce((ac, value) => {
      control--
      return ac += Number(value) * control;
    }, 0);

    let d1 = 11 - (total % 11);
    if (d1 > 9) d1 = 0;
    return d1;
  }

  checkCPF(cpf = this.cpf) {
    const inputedCPF = cpf;
    if (typeof inputedCPF !== 'string') return false;
    if (inputedCPF[0].repeat(inputedCPF.length) === inputedCPF) return false;
    if (inputedCPF.length !== 11) return false;

    const numbers = Array.from(inputedCPF).slice(0, 9);

    const d1 = CPF.createDigit(numbers);
    numbers.push(d1);
    const d2 = CPF.createDigit(numbers);
    numbers.push(d2);
    
    const validCPF = numbers.reduce((ac, value) => ac += value);
    return validCPF === inputedCPF;
  }
}