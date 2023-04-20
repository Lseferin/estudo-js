// Estrutura
// if (mínimo 1 condição) {
// ações da condição
// }


// ********************************************************************************************************
// var variavel1 = true;
// var variavel2 = false;

// // Uma condição
// if ( variavel1 ) {
// 	alert("Ação 1");
// }

// // Outro bloco de códigos
// if ( variavel2 ) {
// 	alert("Ação 2");
// }

// ********************************************************************************************************


// INLINE 

// var preco = 22;
// var mensagem = ( preco == 22 ) ? 'Preço: ' + preco : 'Muito caro!';

// alert(mensagem);


// ( condicao ) ? ação se verdadeira : ação se falsa;
// ? equivale ao if 
// : equivale ao else



// ***********************************************************************************************************************

// Variáveis booleanas
// var manha = false;
// var tarde = true;
// var noite = false;

// // Condição
// if (manha) {
//     alert("café");
// } else if (tarde) {
//     alert("almoço");
// } else {
//     alert("janta");
// }

// *****************************************************************************************************************************

//  if(condição) {
//     // ação
// } else if (outra condição) {
//     // ação
// } else {
//     // ação final se nenhuma condição for verdadeira.
// }

// *************************************************************************************************************************
// OPERADORES DE DESIGUALDADE E NÃO IDENTIDADE

// var a = 1; // number
// var b = '1'; // string

/**
  condição é falsa porque a e b tem o mesmo valor, mesmo sendo de tipos diferentes
 */
// if ( a != b ) {
// 	alert('a é diferente a b');
// }


//  var a = 1;  number
//  var b = 2;  string
//  var result = a + b;

/**
 condição é verdadeira porque o tipo de dados é diferente 
 
 a é um número com valor 1
 b e uma string com valor 1
 */
//  if ( a !== b ) {
//  	//  a é diferente de b por não serem do mesmo tipo
//  	alert(result);
//  } else if ( a != b ) {
//      alert('são do mesmo valor e tipos diferentes');
//  } 

//  == valida se o valor é igual
//  === valida tipo e valor
//  != valida se valor é diferente
//  !== valida se valor e tipo são diferentes


//  var a = 1;
//  var b = 1;

//  if ( a => b ) {
//  	alert('a é maior ou igual a b');
//  } 

// *************************************************************************************************************************

// Operadores relacionais

// var a = 1;
// var b = 2;

// if ( a < b ) {
// 	alert('a é menor que b');
// } 

// var a = 22;
// var b = 100;

// if ( a => b ) {
// 	console.log('a é maior ou igual a b');
// } else if ( b => a ) {
//   console.log('b é maior que a');
// }

// < menor que 
// > maior que
// <= menor igual
// >= maior igual

// *************************************************************************************************************************

// Operadores lógicos
// var a = 1;
// var b = 3;
// var c = 2;
// var d, e, f, i;

// if ( a && b && c ) {
// 	alert('a, b e c têm valores.');
// }

// a, b e estão com valores setados, mas qualquer outra variável que não possua valor, como a var d, e, f e i, se tornam falsas e são puladas pelo javascript

//  tem também o operador || que significa (ou), ele verifica se uma condição a OU uma condição b OU uma condição c são verdadeiras, se pelo menos uma for verdadeira, ele executa a ação. 

// var a = 1;
// var b = 3;
// var c = 2;
// var d, e, f, i;

// if ( a > b || c > a ) {
// 	alert('a não é maior que b, mas c é maior que a.');
// }

// no exemplo, mesmo que a primeira condição seja falsa, a segunda condição é verdadeira e por isso a ação é executada.  


//  O operador && só executa se todas as condições forem verdadeiras

// var a = 1;
// var b = 3;
// var c = 2;
// var d, e, f, i;

// if ( ( a > b || c > a ) && ( d || e ) ) {
// 	alert('Primeiro grupo verdadeiro, segundo grupo falso.');
// }


// *************************************************************************************************************************
// Switch case 

// var a = 'TutsUP';

// switch ( a ) {
// 	case 'Mozilla':
// 		alert('Achei');
// 		break;
// 	case 'Google':
// 		alert('Achei');
// 		break;
// 	case 'TutsUP':
// 		alert('Achei!');
// 		break;
// 	default:
// 		alert('Não achei sua condição.');
// }

//  switch (valor a ser verificado) {
//   case "caso 1";
//     ação;
//     quebra da ação;
//   case "caso 2";
//     ação;
//     quebra da ação;
//   defalut seria o else:
//     ação do default;  
// }

// ****************************************************************
// IF Ternário

// var salario = 1000;
// var bonus = salario * (salario > 1000 ? 0.10 : 0.15);

// condição? valor se for verdareiro : valor se for falso

// ****************************************************************

// var minhaString = "Uma string";
// var outraVariável = minhaString;
// var ambosOsValores = outraVariável + ' uma string';
// var umaFunção = func();
// var umArray = new Array();

// Atribui o valor do array à variável
// var meuArray = new Array();

// // Atribui um valor qualquer em uma chave do array
// meuArray[0] = 'Qualquer valor';

// // Exibe o valor da chave 0 do array como um alerta
// alert( meuArray[0] );

// ****************************************************************
// Operadores aritméticos

// var resultado = 1 + 1; // 2
// var a = 2;
// var b = 4;
// var c = a * b; // 8

// contas com operadores aritméticos + - * / %

// ****************************************************************
// Concatenação

// var c = 'a' + 2; // Agora o valor será a2

// var a = 'Meu ';
// var b = 'nome ';
// var c = a + b + 'é Luiz.';

// // Resultado de c: Meu nome é Luiz
// alert( c );

// uso do operador de adição entre string e valor numérico

// ****************************************************************
// Operador unário

// ++ *dois sinais de adição) Incrementa 1 ao operando
// - - (dois sinais de subtração) Diminui 1 do operando
// – (um sinal de subtração) Representa um valor negativo

// Atribui o valor 333
// var a = 333;
// a--;

// // Resultado é 332
// alert( a );

// var a = 1;
// var b = ++a; // Valor de a e de b é 2
// var c = a++; // Valor de c é 2, mas de a agora é 3


// ****************************************************************
// OPERADOR DE ATRIBUIÇÃO + OPERADOR ARITMÉTICO

// var a = 2;

// a += 1; // 3
// a *= 2; // 6
// a /= 1; // 6
// a -= 1; // 5

// seria o mesmo que 

// var a = 2;

// a = a + 1; // 3
// a = a * 2; // 6
// a = a / 1; // 6
// a = a - 1; // 5
























