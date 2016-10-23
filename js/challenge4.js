/*

Arquivo js para resolução do primeiro desafio do Project Euler
Segue o desafio: "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers."

*/

var array = [];

for (var i = 900; i <= 999; i++) {
  for (var x = 900; x <= 999; x++) {
    var a = String(x * i); // Convertendo para String para aplicar métodos de string
    var b = Number(a);
    a = a.split(""); // tranformando em array
    a = a.reverse(); // invertendo o array
    a = Number(a.join("")); // tranformando em string novamente e forçando um número
    if(a == b) {
      array.push(a);
    }
  }
}
var index = array.length;
console.log(array[index - 1]);

/*
Obs.: Comecei os loops a partir dos últimos 100 números com 3 dígitos, pois, o resultado do desafio tem mais chances de estar na múltiplicação destes últimos dois números
*/
