let dataEHora = Date(); // utilizando a chamada de função diretamente
console.log(dataEHora);
// Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora);
// string

// let dataEHora = new Date(); // utilizando o construtor do objeto Date
// console.log(dataEHora);
// // 2022-02-01T02:46:51.517Z
// console.log(typeof dataEHora);
// // object

let dataComConstrutor = new Date();
let data1 = dataComConstrutor.getDate();
console.log(data1); //31

let dataFuncao = Date();
let data2 = dataFuncao.getDate();
//TypeError: dataFuncao.getDate is not a function

//  Alguns exemplos de outros métodos disponíveis no objeto Date são:

//  .getMillisseconds()
//  .getSeconds()
//  .getMinutes()
//  .getHours()
//  .getDay()
//  .getMonth()
//  .getFullYear()
