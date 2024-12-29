function getRandomNumber(max, min) {
  return Math.floor(Math.random() * max) + min;
}
function Pessoa(nome, sobrenome, idade, endereco) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.endereco = endereco;
  Object.defineProperties(this, {
    id: {
      value: getRandomNumber(10000, 1),
      writable: false,
      configurable: false
    },
    nome: {
      get: function() {
         return nome},
      configurable: false,
      enumerable: true,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Nome deve ser uma string');
        }
        nome = value;
      }
    },
    sobrenome: {
      get: function() {
        return sobrenome;
      },
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Sobrenome deve ser uma string');
        }
        sobrenome = value;
      }
    },
    idade: {
      get: function() {
        return idade;
      },
      set: function(value) {
        if (typeof value !== 'number') throw new Error('Idade deve ser um número');
        if (value < 0 || value > 120) throw new Error('Idade deve ser um número entre 0 e 120');
        idade = value;
      }
    },
    endereco: {
      get: function() {
        return endereco;
      },
      set: (value) => {
        if (typeof value !== 'object') {
          throw new Error('Endereço deve ser um objeto');
        }
      }
    }
  });
}
function Endereco(rua, numero, cidade, estado) {
  this.rua = rua;
  this.numero = numero;
  this.cidade = cidade;
  this.estado = estado;

  Object.defineProperties(this, {
    rua: {
      get: () => rua,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Rua deve ser uma string');
        }
        rua = value;
      }
    },

    numero: {
      get: () => numero,
      set: (value) => {
        if (typeof value !== 'number') {
          throw new Error('Número deve ser um número');
        }
        numero = value;
      }
    },

    cidade: {
      get: () => cidade,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Cidade deve ser uma string');
        }
        cidade = value;
      }
    },

    estado: {
      get: () => estado,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Estado deve ser uma string');
        }
        estado = value;
      }
    }
  });
}

// -------------------------------------------- //

const endereco = new Endereco('rua 001', '0012', 'São Paulo', 'SP');
const pessoa = new Pessoa(2, 'Santos', 20, endereco);

// -------------------------------------------- //

console.log(pessoa);
for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
for (let key in endereco) {
  console.log(key, endereco[key]);
}