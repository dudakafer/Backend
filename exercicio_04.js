import readLine from "readline-sync";

//ATIVIDADE 1

let dia = readLine.question("Informações do dia da semana: ")
switch (dia) {
    case '1':
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda');
        break;
    case '3':
        console.log('Terça');
        break;
    case '4':
        console.log('Quarta');
        break;
    case '5':
        console.log('Quinta');
        break;
    case '6':
        console.log('Sexta');
        break;
    case '7':
        console.log('Sabado');
        break;

    default:
        console.log('Valor Invalido \n Informe o valor no intervalo de 1 a 7');
        break;
}

//ATIVIDADE 2
import entradaDados from 'readline-sync';

let mes = readLine.question("Informações do dia da semana")
switch (mes) {
    case '1':
        console.log('Janeiro')
        break;
    case '2':
        console.log('Fevereiro')
        break;
    case '3':
        console.log('Março')
        break;
    case '4':
        console.log('Abril')
        break;
    case '5':
        console.log('Maio')
        break;
    case '6':
        console.log('Junho')
        break;
    case '7':
        console.log('Julho')
        break;
    case '8':
        console.log('Agosto')
        break;
    case '9':
        console.log('Setembro')
        break;
    case '10':
        console.log(' Outubro')
        break;
    case '11':
        console.log('Novembro')
        break;
    case '12':
        console.log('Dezembro')
        break;
    default:
        console.log('Valor Invalido \n Informe o valor certo');
        break;

}

//ATIVIDADE 3
import entradaDados from 'readline-sync';

let x = readLine.question("Informe o primero numero: ")
let y = readLine.question("Informe o segundo numero: ")
let op = readLine.question("Escolha a opção: /n{1}Soma /n{2}Subtração /n{3}Multiplicação /n{4}Divisão")

switch (op) {
    case '1':
        console.log('${x} + ${y} = ${x + y}')
        break;
    case '2':
        console.log('${x} - ${y} = ${x - y}')
        break;
    case '3':
        console.log('${x} * ${y} = ${x * y}')
        break;
    case '4':
        console.log('${x} / ${y} = ${x / y}')
        break;
    default:
        console.log('Valor Inválido /nDigite um numero entre 1 a 4 ');
        break;
}

//ATIVIDADE 4

import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat('Digite o seu salario: ')
let cat = entradaDados.question('Selecione uma categoria\n[A] 5%\n[B] 10%\n[C] 15%\n[D]20% ').toUpperCase();
let bonus = 0

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;
    case 'C':
        bonus = salario * 0.15;
        console.log(`${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;
    default:
        console.log('Valor invalido\nInforme o valor correto')
        break;
}

