//01
let nome = "Eduarda Vitoria Kafer Almeida";
let idade = 15;
console.log (nome , idade)
console.log ("ola meu nome é " +nome+  " e tenho " +idade+ " anos")

//02
let texto = "dudu"
let textoMinusculo = texto.toLocaleLowerCase();
let textoMaisculo = texto.toLocaleUpperCase();
console.log(textoMinusculo);
console.log(textoMaisculo);

//03
console.log(typeof idade);

//04
let peso = 70
let altura = 1.67
let imc = (peso / (altura * altura)) .toFixed(2);
console.log('seu imc e '+imc);
