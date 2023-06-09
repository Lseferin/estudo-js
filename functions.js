// function ola() {
//   console.log("Olá")
// }
// ola()

// function ola() {
//   function mensagem() {
//       return "Olá"
//   }
//   console.log(mensagem())
// }
// ola()

// function ola() {
//   function mensagem() {
//       return "Olá"
//   }
//   console.log(mensagem())
// }
// ola()

// console.log(ola())

// function ola(nome) {
//   console.log("Olá", nome)
// }
// ola("Lívia")

// variável de função morre dentro de função
// tem que dar console.log para imprimir a função, caso contrário, a função apenas existe, mas não é chamada

// const numeroAleatorio = () => {
//   return Math.random()
// }

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

// function ola(nome) {
//   return `Olá ${nome}`
// }

// function Pessoa(nome) {
//   this.nome = nome
// }
// const p = new Pessoa("Lívia")

// function ola() {
//   yield "Lívia"
//   yield "Seferin"
//   yield "dos Santos"
// }

// yield é um ponto de interrupção, indica quais são os passos e onde a função deve ir parando sua execução

// **********************

// function sayHello() {
//   console.log("Hello!")
// }

// sayHello()

// não retorna nada

// function sayHelloTo(name) {
//   console.log("Hello " + name)
// }

// sayHelloTo("Lívia")
// função com parâmetro

// function sayHelloTo(name) {
//   console.log(`Hello  ${name}`)
// }

// sayHelloTo("Lívia")
// outra forma de escrever
// não retorna nada, mas possui parâmetro

// function returnHi() {
//   return("Hi")
// }

// let hi = returnHi()
// console.log(hi)
// console.log(returnHi())
// outra forma de imprimir
// função sem parâmetro, mas com retorno

// function returnHiTo(name) {
//   return `Hi ${name}`
// }

// console.log(returnHiTo("Lívia"))
// função que recebe parâmetro e retorna um valor
// precisa ter return para retornar algum valor

// função anônima = a função não possui nome 
// (function (a, b) {
//   return a + b
// })

// const sum = function(a, b) {
//   return a + b
// }

// const result = sum(7,59)
// console.log(result)

// função
// const increment1 = function(n) {
//   return n + 1
// }

// arrow function
// sempre será uma função anônima
// const increment2 = (n) => {
//   return n + 1
// }

// const increment3 = n => {
//   return n + 1
// }
// quando possui apenas 1 parâmetro, não necessário colocar parênteses()

// const increment4 = n => n + 1
// arrow function inline não precisa de chaves e sendo assim não precisa ter return, pois já é implicito o retorno após a =>

// console.log(increment1(1))
// console.log(increment2(5))
// console.log(increment3(24))
// console.log(increment4(99))

// ****************************************************************

// Funções anônimas
// função sem nome
// geralmente não está acessível após a sua criação
// Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável, nesse caso à variável show.

// setTimeout(function () {
//     console.log("Executar depois de 1 segundo")
// }, 1000);
// passamos como argumento uma função anônima para a função setTimeout. A função anônima nesse caso passa a ser um parâmetro da função setTimeout. E ela executa a função anônima 1 segundo depois. 
// pode passar uma função para outra como argumento. 

// (funtion() {
//     console.log("Executar imediatamente a função invocada");
// })();
// os últimos parenteses à direita permitem chamar a função. 
// as vezes faz sentido passar argumentos para ela 

// exemplo: 
// let pessoa = {
//     nome: "Lívia",
//     sobrenome: "Seferin"
// };

// (function () {
//     console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
// })(pessoa);

// por que usar funções anônimas?
//  permitir passá-la como se fosse um objeto qualquer, que você pode atribuir a uma variável
