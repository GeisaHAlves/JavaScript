export default class User {
  #nome;
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

//   get nome() {
//     return `${this.#nome} ${this.#sobrenome}`
//   }
  get nome() {
    // lógica de condicional
    return this.#nome;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("formato inválido");
    }
    this.#nome = novoNome
    // let [nome, ...sobrenome] = novoNome.split(" ");
    // sobrenome = sobrenome.join(" ");
    // this.#nome = nome;
    // this.#sobrenome = sobrenome;
  }

  //   #montaObjUser() {
  //     return {
  //       nome: this.#nome,
  //       email: this.#email,
  //       nascimento: this.#nascimento,
  //       role: this.#role,
  //       ativo: this.#ativo,
  //     };
  //}

  exibirInfos() {
    // const objUser = this.#montaObjUser();
    // return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

// const novoUser = new User('Juliana', 'j@j.com', '2001-01-01')

// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))//true



// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
// // console.log(novoUser.nome) //'Juliana'
// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome) //'Juliana'
// // console.log(novoUser.sobrenome) //'Silva Souza'
