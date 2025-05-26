import entradaDados from 'readline-sync';

//01
let num = entradaDados.questionInt('Informe o numero para gerar a tabuada: ');
let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}
//02


let numAlunos = entradaDados.questionInt("Informe o numero de alunos da turma: ");
let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
    console.log(`Aluno ${contAlunos}`);

    let contBimestres = 1;
    let somaNotas = 0;

    while (contBimestres <= 4) {
        let nota = entradaDados.questionInt(`informe a nota do ${contBimestres} bimestre do aluno ${contAlunos}: `);
        somaNotas += nota;
        contBimestres++;
    }
    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Media do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Media geral da turma ${mediaGeralTurma.toFixed(2)}`);

//03 

const numeroAleatorio = (Math.random() * 100) + 1;

let palpite;

do {
    palpite = rl.questionInt("Tente adivinnhar o numero( entre  1  e 100):");
    if (palpite === numeroAleatorio) {
        console.log('Parabens voce ganhou.')
    } else if (palpite < numeroAleatorio) {
        console.log("tente um numero maior.")
    }
    else {
        console.log("tente um numero menor")
    }
} while (palpite !== numeroAleatorio);

// 04
let nome = entradaDados.question(`Informe o nome da ${i} pessoa`)
let salario = entradaDados.questionFloat(`informe o salario de ${nome}: `)
let impostoRenda = 0;

if (salario <= 2100) {
    impostoRenda = 0;
} else if (salario <= 2000) {
    impostoRenda = salario * 0.075;
} else if (salario <= 3750) {
    impostoRenda = salario * 0.15;
} else if (salario <= 4660) {
    impostoRenda = salario * 0.225;
} else {
    impostoRenda = salario * 0.275;
}

console.log(`\n---Imposto de renda a ser pago---`)
console.log(`Nome: ${nome} \nImposto de renda: R$ ${impostoRenda.toFixed(2)}\n`);

//05

let anterior = 0;
let atual = 1;

console.log('---Sequencia de Fibonacci---');
console.log(anterior)
console.log(atual)

for (let i = 3; i <= 20; i++) {
let proximo = anterior + atual;
console.log(proximo);
anterior= atual;
atual = proximo;
}


//06

const pessoa = {
    nome: "Yasmin",
    idade: 25,
    sexo: F
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

