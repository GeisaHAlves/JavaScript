// class User {
//   constructor(nome, email, cpf) {
//     this.nome = nome;
//     this.email = email;
//     this.cpf = cpf;
//   }
//   exibirInfos() {
//     return `${this.nome}, ${this.email}, ${this.cpf}`;
//   }
// }

// const novoUser = new User("Carol", "c@c.com", "12312312312");
// console.log(novoUser.exibirInfos()); //Carol, c@c.com, 12312312312

// // console.log(User.exibirInfos())
// //   //TypeError: User.exibirInfos is not a function

// class User {
//   constructor(nome, email, cpf) {
//     this.nome = nome;
//     this.email = email;
//     this.cpf = cpf;
//   }
//   static exibirInfos() {
//     return `${this.nome}, ${this.email}, ${this.cpf}`;
//   }
// }

// console.log(User.exibirInfos());
// //undefined, undefined, undefined

class User {
  constructor() {
    this.nome = "Camila";
    this.email = "c@c.com";
    this.cpf = "12312312312";
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`;
  }

  static exibeNome(nome) {
    return nome;
  }
}

const novoUser = new User("Carol", "c@c.com", "12312312312");
const nomeUser = novoUser.nome;
console.log(User.exibeNome(nomeUser)); //Camila

console.log(User.exibeNome('Jaqueline')) //Jaqueline
