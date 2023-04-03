// function exibeInfos() {
//   console.log(this.nome, this.email);
// }

// const user = {
//   nome: "Mariana",
//   email: "m@m.com",
// };

// exibeInfos.call(user);

// // Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:
// function User(nome, email) {
//   this.nome = nome;
//   this.email = email;

//   this.exibeInfos = function () {
//     console.log(this.nome, this.email);
//   };
// }

// const newUser = new User("mariana", "m@m.com");

// const outroUser = {
//   nome: "Rodrigo",
//   email: "r@r.com",
// };

// newUser.exibeInfos(); //mariana m@m.com
// newUser.exibeInfos.call(outroUser); //Rodrigo r@r.com

//Também é possível passar parâmetros para call()

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const user = {
  nome: "Mariana",
  email: "m@m.com",
  executaFuncao: function (fn) {
    fn.call(user, this.nome, this.email);
  },
};

user.executaFuncao(exibeMensagem); //usuário: Mariana, email m@m.com
