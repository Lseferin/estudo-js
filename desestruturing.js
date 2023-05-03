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
// 

// const user = {
//     nome: "Lívia",
//     sobrenome: "Seferin",
//     idade: 20,
// }

// const {nome, sobrenome} = user;
// console.log(`$nome, $sobrenome`);

let nome = "L";
let sobrenome = "S";

const user = {
    nome: "Lívia",
    sobrenome: "Seferin",
    idade: 20,
};

({nome, sobrenome} = user);
console.log(`${nome} ${sobrenome}`);
// alteraramos os valores das nossas variáveis locais, declaradas nas linhas 1 e 2, para os valores que constavam no objeto user.
// Ao tentar atribuir uma variável a uma chave que não existe no objeto, o valor undefined será atribuído a variável.
