const user = {
    nome: "Juliana",
    email: "j@email.com",
    nascimento: "2001/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//herança de prototipo

// user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()

// conceito de objeto
const objProduto = {
    tipo: "caneca",
    preco: 10,
    tamanho: {
      grande: '300ml',
      pequena: '120ml'
    },
    fragil: true,
    cores: ['preto', 'branco', 'azul']
   }