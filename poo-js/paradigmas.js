// paradigma imperativo

function dobra(vetor) {
  let resultados = [];
  for (let i = 0; i < vetor.length; i++) {
    resultados.push(vetor[i] * 2);
  }
  return resultados;
}

// implementação declarativa

function dobra(vetor) {
  return vetor.map((item) => item * 2);
}

// declarativas

// <h1> Programação Declarativa</h1>
// <p> Estou declarando como quero que o texto apareça, e não dizendo para o computador como renderizar um texto</p>

// SELECT * FROM Alunos WHERE Escola=’Alura’;
