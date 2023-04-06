// class User {
//     role = '';

//     constructor(nome) {
//       this.nome = nome;
//       console.log(`Criado novo usuário: ${nome}` );
//     }
//    }

//    // criar o usuário
//    let novoUser = new User('Rodrigo');

//    // modificar o role
//    novoUser.role = 'admin';
//    console.log(novoUser.role) // admin

//---------------------------------------------
// class User {
//     _role = '';

//     set role(tipoRole) {
//       if (tipoRole !== 'admin') {
//         tipoRole = 'estudante'
//       }
//       this._role = tipoRole
//     }

//     get role() {
//       return this._role
//     }

//     constructor(nome) {
//       this._nome = nome;
//     }
//    }

//    // criar o usuário
// let novoUser = new User('Rodrigo');

// // modificar o role
// novoUser.role = 'admin'; // acessando via setter
// console.log(novoUser.role) // admin

// // tentar incluir um role não existente
// novoUser.role = 'gerente';
// console.log(novoUser.role) // estudante

//---------------------------------------------

// class User {
//     constructor(nome) {
//      this._nome = nome
//    }

//    get nome(){
//      return this._nome
//    }
//   }

//   // criar o usuário
// let novoUser = new User('Rodrigo');
// console.log(novoUser.nome) //usando o getter

// novoUser.nome = 'Mariana'
// console.log(novoUser.nome) //não é modificado, continua 'Rodrigo'

//-----------------------------------------------

class User {
  _nome = "";

  setNome(nome) {
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }
}

const novoUser = new User();
novoUser.setNome("Rodrigo");
console.log(novoUser.getNome()); //Rodrigo
