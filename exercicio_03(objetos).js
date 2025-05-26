//01
let apartamento = {
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(
    `Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`
);

//02
let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletronicos',
    peso: 1.5,
    preco: 3500
}

console.log(`O produto ${produtoEmbalado.nome}, pesando ${produtoEmbalado.peso} kg,esta a venda por ${produtoEmbalado.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

//03

class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco
    }
}

let casa = new Imovel();
casa.quartos = 2;
casa.tipo = 'sobrado';
casa.endereco = 'centro';

let ap = new Imovel(2, 'Apartamento', 'Rua da depressao,bairro da solidao, num:666');

console.log(`Quartos: ${casa.quartos} \nTipo: ${casa.tipo} \nEndereço ${casa.endereco}`);
console.log(`Quartos: ${ap.quartos}\nTipo: ${ap.tipo}\nEndereço ${ap.endereco}`);

//04

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

    }
    exibirInformaçoeas(){
        return ``
    }
}