import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana','m@m.com', '2001-03-03')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.#montaObjUser())

////acesso impedido por ser privado
// novoUser.#nome = 'Marcia'
// novoUser.#email = 'x@x.com
// console.log(novoUser.nome)
// const novoAdmin = new Admin('Rodrigo','r@r.com', '2000-04-04')
// console.log(novoAdmin.nome)
// // console.log(novoAdmin.exibirInfos())
// // console.log(novoAdmin.nomeAdmin())//undefined
// novoAdmin.nome = 'André'
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@g.com', '2019-05-05')
console.log(novoDocente.exibirInfos())