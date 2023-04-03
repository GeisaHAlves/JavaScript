// //factory function
// function criaUser(nome, email) {
//   return {
//     nome,
//     email,
//     exibeInfos() {
//       return `${nome}, ${email}`;
//     },
//   };
// }

// const newUser = criaUser("Rodrigo", "r@r.com");
// console.log(newUser);
// console.log(newUser.exibeInfos());

//funções construtoras
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function () {
    return `${nome}, ${email}`;
  };
}

const newUser = new User("Mariana", "m@m.com");
console.log(newUser);
console.log(newUser.exibeInfos());


