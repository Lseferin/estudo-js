// map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// estrutura
// arr.map(callback[, thisArg])

// callback = retorno da função produz o elemento do novo array. recebe 3 argumentos:
// 1- valor atual= valor do array original 
// 2- indice = posição atual do elemento que está sendo processado no array
// 3- array= array de origem

// console.log(Array.from('name'));
// dita cada letra de name 

// **********************
// Concat 

// const frutas = ["morango", "banana", "limão"];
// const vegetais = ["brócolis", "cebola", "cenoura"];

// const listar = frutas.concat(vegetais);
// console.log(listar);

// concatena as duas listagens. frutas+vegetais

// **********************
// Join

// const frutas = ["morango", "banana", "limão"];
// console.log(frutas.join);
// console.log(frutas.join([separador = '-']));

// separa listagem com - 

// join() gera uma string com todos os elementos do array. O método vai converter o elemento do array numa string, se você desejar, poderá especificar o separador, por padrão será uma vírgula.

// **********************
// Splice

// const frutas = ["morango", "banana", "limão"];
// console.log(frutas);

// const removed = frutas.splice(1, 1, "morango")
// console.log(removed);
// console.log(frutas)

// método usado para remover itens e adicionsar outros.
// primeiro indice indica onde iniciará a remoção, segundo indica quantos itens serão removidos, e terceiro e em diante indica os itens que substituiram

// **********************
// indexOf()

// usado para descobrir a posição de um elemento no array
// Quando não for encontrado, o resultado será -1.

// const frutas = ["morango", "banana", "limão"];
// console.log(frutas.indexOf("morango"))

// **********************
// lastIndexOf()

// retorna a última posição de um item no array. A pesquisa no array é realizada de trás para frente.
// Quando não for encontrado, o resultado será -1.

// const frutas = ["morango", "banana", "limão"];
// console.log(frutas.lastIndexOf("banana"))

// **********************
// find

// find() se precisar retornar o valor de um elemento do array. O método find executa a função callback testando cada elemento do array, até encontrar o valor desejado e o callback retornar true.

// let frutas = [3, 4, 7, 9];
// console.log(frutas.find(element => element > 5))

// frutas = [
//   {name: "morango", price: 3.55},
//   { name: "banana", price: 2.43 },
//   { name: "limão", price: 4.76 }
// ]
// valor setado para cada item

// const resultado = frutas.find(fruta => fruta.name === "banana");
// console.log(resultado)
// mostra o valo do item

// **********************
// reverse()

// usado para inverter os valores do array, o último vira o primero e o primeiro vira o ultimo

// const list = [1, 2, 3, 4];
// console.log(list.reverse());

// **********************
// sort()

// usado para classificar os elementos do array. retorna o array alternando as posições de acordo com a classificação
// por padrão esta classificação é alfabética

// const frutas = ["morango", "banana", "limão"];
// frutas.sort()
// console.log(frutas)

// para a classificação em ordem alfabética decrescente, abaixo: 

// const frutas = ["morango", "banana", "limão"];
// frutas.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   return 0
// })

// console.log(frutas)

// **********************
// shift()

// usado para remover e retornar o primeiro elemento do array

// const frutas = ["morango", "banana", "limão"];
// const primeiraFruta = frutas.shift();
// console.log(primeiraFruta);
// console.log(frutas)

// remove o primeiro item do array.

// **********************
// pop()

// remove e retorna o ultimo elemento do array 

// const frutas = ["morango", "banana", "limão"];
// const primeiraFruta = frutas.pop();
// console.log(primeiraFruta);
// console.log(frutas)

// **********************
// push()

// usado para adicionar um ou mais elementos no final de um array


// const frutas = ["morango", "banana", "limão"];
// const totalFrutas = frutas.push("manga", "uva")

// console.log(frutas)
// console.log(totalFrutas)

// **********************
// unshift()

// usado para adicionar 1 ou mais itens no inicio do array

// const frutas = ["morango", "banana", "limão"];
// const totalFrutas = frutas.unshift("manga", "uva")
// console.log(frutas)
// console.log(totalFrutas)

// **********************

// For

// let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }

// console.log(arr); 

// Map()

// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });
// o map percorre cada item do array
// multiplicou cada item do array por 3
// a modifiedArr possui um map que percorre cada item do array, com uma função que irá retornar cada valor do array multiplicado por 3

// console.log(modifiedArr);


// let users = [
//   {firstName : "Susan", lastName: "Steward"},
//   {firstName : "Daniel", lastName: "Longbottom"},
//   {firstName : "Jacob", lastName: "Black"}
// ];

// let userFullnames = users.map(function(element){
//   return `${element.firstName} ${element.lastName}`;
// })

// console.log(userFullnames);

// let arr = [2, 3, 5, 7]

// arr.map(function(elemento, indice, array){
// 	console.log(elemento)
//   console.log(indice)
//   console.log(array)
// });


// arr.map(function(value, index, array){
//   // console.log(value)
//   console.log(index)
//   console.log(array)
// })

