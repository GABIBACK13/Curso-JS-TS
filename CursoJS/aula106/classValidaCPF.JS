class CPF {
  constructor(inputedCPF) {
    Object.defineProperty(this, 'inputedCPF', {
      writable: false,
      configurable: false,
      enumerable: true,
      value: inputedCPF.replace(/\D+/g, '')
    });
    Object.defineProperty(this, 'firstNumbers', {
      writable: false,
      configurable: false,
      enumerable: true,
      value: Array.from(this.inputedCPF).slice(0, 9)
    })
  }

  static createDigit(array) {
    let control = array.length +2;
    
    const total = array.reduce((ac, value) => {
      control--
      return ac += Number(value) * control;
    }, 0);
    
    let digitOutput = 11 - (total % 11);
    if (digitOutput > 9) digitOutput = 0;
    return digitOutput;
  }

  createCPF() {
    let array = this.firstNumbers;
    const digit01 = CPF.createDigit(array);
    array.push(digit01); 
    const digit02 = CPF.createDigit(array);
    array.push(digit02);
    
    return array.reduce((ac, value) => ac += value);
  }

  check() {
    if (typeof this.inputedCPF !== 'string') return false;
    if (this.inputedCPF[0].repeat(this.inputedCPF.length) === this.inputedCPF) return false;
    if (this.inputedCPF.length !== 11) return false;
    return this.createCPF() === this.inputedCPF;
  }
}
let c  = new CPF('111.111.111-11');
console.log(c.check());
