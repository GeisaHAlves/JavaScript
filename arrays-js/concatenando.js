const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

const arrayOriginalOutro = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcatOutro = arrayOriginalOutro.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcatOutro)
console.log(arrayOriginalOutro)

const arrayOriginalDeNovo = [50, 60, 70]
const arrayConcatDeNovo = arrayOriginalDeNovo.concat([80, [90, 100]])

console.log(arrayConcatDeNovo)
console.log(arrayOriginalDeNovo)
