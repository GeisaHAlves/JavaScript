import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  // nomeAdmin() {
  //   return `${this.nome}`
  // }

  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`;
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2000-0202");
// // console.log(novoAdmin)
// // console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso("JS", 20));

// //Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo package.json, a propriedade ”type”: “module” e sempre incluir a extensão do arquivo .js nos caminhos de importação - por exemplo import soma from ‘./caminho/arquivo.js’;
