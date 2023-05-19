// é possível passar uma função como parämetro de outra função 

// map tranforma cada um dos elementos do array
// filter filtra os elementos
// reduce consegue somar todos os elementos

// const add = function(a, b) {
//     return a + b;
// }

// const subtract = function(a, b) {
//     return a - b;
// }

// const multiply = (x, y) => x * y;

// const divide = (x, y) => x / y;

// console.log(add(10, 20))
// console.log(subtract(10, 20))
// console.log(multiply(10, 20))
// console.log(divide (10, 20))

// const numbers = [1, 2, 3, 4, 5, 6]

// const numbersV2 = numbers.map(function (el) {
//     return el * 2
// })

// const numbersV2 = numbers.map(el => el * 2)
// arrow function

// console.log(numbersV2)
// função dentro de função
// a const numbers recebe o array de numeros do 1 ao 6
//  a const numberV2 recebe um map em numbers com uma função
// a funçãopega os elementos percorridos 
// return multiplica os elementos percorridos por 2 

// const students = [
//     { name: "Jake", score: 6.4},
//     { name: "Susan", score: 8.6},
//     { name: "Emma", score: 9.1},
// ]

// const getScore = el => el.score

// console.log(
//     students
//             .map(getScore)
//             .map(Math.ceil)
// )

// students = array de objeto
// getScore pega o elemento score 
// map em students pegando o getScore
// map pegando os scores e arredondando o valor pra cima

// é possível chamar um map atrás do outro até chegar ao resultado esperado

// FILTER****************************************************************

// const numbers = [1, 2, 3, 4, 5, 6]

// const greaterThanZero = el => el > 0
// const greaterThanTen = el => el > 10
// const even = el => el % 2 === 0

// console.log(numbers.filter(el => el > 0))
// // ou
// console.log(numbers.filter(greaterThanZero))
// // exibe um array com os numeros maiores que 0
// console.log(numbers.filter(greaterThanTen))
// // exibe um array com os numeros maiores que 10
// console.log(numbers.filter(even))
// // exibe um array com os numeros que o resultado da divisão é zero



// const students = [
//         { name: "Jake", score: 6.4},
//         { name: "Susan", score: 8.6},
//         { name: "Emma", score: 9.1},
//     ]

// const greatStudent = student => student.score >= 9
// console.log(students.filter(greatStudent))
// console.log(students)
// // greatStudent recebe as notas maior que 9 
// // console fazendo um filter no array de students e exibindo somente os que possuem nota maior que 9 



// REDUCE****************************************************************
// const numbers = [1, 2, 3, 4, 5, 6]

// const sum = (total, el) => total + el
// const total = numbers.reduce(sum, 100)
// console.log(total)

// // sum pega o total + elemento
// // total é o numero inicial por default, el é o próximo número
// // total recebe um reduce em number partinho do numero 100 + cada elemento