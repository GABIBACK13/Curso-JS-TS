let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC)
// B C A

let Box = varA; 
varA = varB;
varB = varC;
varC = Box;

console.log(varA, varB, varC)
nome = 'Gabriel back'
