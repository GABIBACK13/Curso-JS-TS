function ckeckCPF(CPF) {
  const inputedCPF = CPF.replace(/\D+/g, '');
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
};

// ========================================== //
cpf = '111.111.111-11'
console.log(ckeckCPF(cpf));
