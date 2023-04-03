//declaracao de funcao

function soma(num1, num2) {
  return num1 + num2;
}

//expressao de funcao

const soma = function (num1, num2) {
  return num1 + num2;
};

// arrow function ou “função de seta”

const soma = (num1, num2) => {
  return num1 + num2;
};
//ou
const soma = (num1, num2) => num1 + num2;


// Por exemplo, o código abaixo (uma declaração de função) executa normalmente:

console.log(soma(1, 1)) //2

//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
 return num1 + num2;
}
// Porém o código abaixo (uma expressão de função) não executa:

console.log(soma(1, 1)) //erro

//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
 return num1 + num2;
}
