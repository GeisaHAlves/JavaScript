let user = {
  perfil: "estudante",
};

let estudante = {
  nome: "juliana",
};

user.ativo = true

Object.setPrototypeOf(estudante, user);

console.log(estudante.nome); // 'juliana'
console.log(estudante.perfil); //'estudante'

console.log(estudante.ativo); // true

// utilizando new para criar um novo objeto
// function User() {}
// User.prototype.perfil = 'estudante'
// let estudante = new User()

// console.log(estudante.perfil) //'estudante'