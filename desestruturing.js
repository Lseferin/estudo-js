// Desestruturação de objetos

// const user = {
//     nome: "Lívia",
//     sobrenome: "Seferin",
//     idade: 20,
//     social: {
//       github: "https://github.com/lseferin",
//     },
//     skills: {
//       frontend: {
//         languages: [ "HTML", "CSS", "JavaScript" ],
//         frameworks: [ "React", "React Native" ],
//       },
//       backend: {
//         languages: [ "JavaScript", "PHP" ],
//       }
//     },
//   };
  
//   function summary() {
//     console.log(`Nome completo: ${user.nome} ${user.sobrenome}`);
//     console.log(`Github: ${user.social.github}`);
//     console.log(`Habilidades: ${user.skills.backend.languages}`);
//     // console.log no languages, que está dentro do backend, dentro de skill, dentro de user
//   }
  
//   summary();

//   o resultado será um resumo do usuário

// function summary({ nome, sobrenome, social: { github }, skills: { backend} }) {
//     console.log(`Nome completo: ${nome} ${sobrenome}`);
//     console.log(`Github: ${github}`);
//     console.log(`Habilidades: ${backend.languages}`);
//   }
  
//   summary(user);
// desestruturação de parâmetros de funções

// const user = {
//     nome: "Lívia",
//     sobrenome: "Seferin",
//     idade: 20,
// }

// const {nome, sobrenome} = user;
// console.log(`$nome, $sobrenome`);

// let nome = "L";
// let sobrenome = "S";

// const user = {
//     nome: "Lívia",
//     sobrenome: "Seferin",
//     idade: 20,
// };

// ({nome, sobrenome} = user);
// console.log(`${nome} ${sobrenome}`);
// alteraramos os valores das nossas variáveis locais, declaradas nas linhas 1 e 2, para os valores que constavam no objeto user.
// Ao tentar atribuir uma variável a uma chave que não existe no objeto, o valor undefined será atribuído a variável.

// ****************************************************************
// Perguntas
//  O que é o Javascript?
// Uma linguagem de script que é possível usar para o desenvolvimento web.

// Qual a diferença entre Javascript e ECMA Script?
// ECMA é uma especificação que contém regras para padronizar o Javascript. Já o javascript é uma linguagem de script que segue os padrões sugeridos pelo ECMA Script.

// Qual a diferença entre valor indefinido e nulo?
// O valor indefinido que uma variável foi declarada, mas ainda não teve um valor atribuído. Já o valor nulo é um valor atribuído ou um resultado de um erro que foi gerado. 

// Que tipos de dados são suportados pelo Javascript?
// String, numberm boolean,BigInt, null, undefined e symbol.

// O que o operador typeof faz?
//  Ele pode retornar se o valor verificado é uma string, boolean...

// O que é uma closure?
// São variáveis ou funções que fazem parte do escopo de uma função, possuem acesso limitado ao escopo da função a que pertencem.

// O que é a diretiva use strict?
// O modo strict é uma forma de manter a escrita do javascript mais rigoroso, proibindo o uso de algumas sintaxes ainda não suportadas. 

// Qual a diferença entre == e ===?
// (==) compara dois valores, independente do seu tipo. Verifica apenas a igualdade do valor.
// (===) Verifica se o valor e o tipo são iguais, geralmente é o mais usado.

// O que são e quando usar template strings?
// Template string é uma string que permite criar expressões embutidas, usando acentos garves para envolver a string no lugar de aspas. É usado quando precisamos adicionar em uma string ou mais variáveis.

