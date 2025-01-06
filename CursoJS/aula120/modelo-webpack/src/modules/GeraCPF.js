import ValidaCPF from './ValidaCPF.js';
export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }
  generate() {
    let cpf = Array.from(String(this.rand()));
    const d1 = ValidaCPF.createDigit(cpf);
    cpf.push(d1);
    const d2 = ValidaCPF.createDigit(cpf);
    cpf.push(d2);
    cpf = cpf.reduce((ac, value) => ac += value);
    const cpfFormatted = this.format(cpf);
    return cpfFormatted;
  }
};