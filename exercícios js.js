//Lê entrada e exibe saída conforme horário

let hora = 18;


if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!');
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');    
} else {
    console.log('Boa noite!');
}

//Exibe par ou impar de 1 a 10

let loop = 1;

for (loop; loop <= 10; loop++) {
    if (loop % 2 === 0) {
        console.log(loop +' é par');
    } else {
        console.log(loop +' é ímpar');
    }
}


//Valor de dois número e retorna o maior:

let number1 = 3;
let number2 = 12;

if (number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
}

//Função que retorna o maior valor:

let maiorValor = max(5,10);

function max (number1,number2) {
        if (number1 > number2)
            console.log(number1);
        else 
            console.log(number2);
        
}

//Função que retorna o maior valor simplificada:
number1 = 2;
number2 = 5;
let maiorDeles = max(number1,number2);

function max (number1,number2) {
    return number1 > number2 ? number1 : number2;
}

console.log(maiorDeles);

//Mini projeto 2 - FizzBuzz

//Mini projeto 3 - Medidor de velocidade;

    //Vel. max: 70km/h
    //A cada 5km/h acima = 1 ponto na carteira
    //Math.Floor() - arredonda valores decimais
    //Caso maior que 12 pontos = carteira suspensa = 130km/h

medidorVelocidade(130);

function medidorVelocidade (velocidade) {
    const velocidadeMAX = 70;
    const kmPorPontos = 5;

    if (velocidade <= velocidadeMAX) {
        console.log('Velocidade permitida.');
    } else if (velocidade > 130) {
        console.log('Carteira Suspensa!');
    }
    else if (pontuacao = Math.floor((velocidade - velocidadeMAX) / kmPorPontos)) {
        console.log( pontuacao + ' ponto(s) na carteira.');
    } else {
        console.log('Não é um número.');
    }
}

//Mini projeto 4 - Par ou ímpar;

    //Lê os números até o valor informado pelo usuário e mostra
    //quantos são pares e quantos são impares

exibeValor(10);

function exibeValor(valor) {
    for(let i = 0; i <= valor; i++) {
    if (i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
     } 
    }

    
}


//Mini projeto 5 - Encontre o string

    //Criar um método para ler propriedades de um obj
    //Exibir somente as propriedades do tipo string


const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: "Thor"
}

exibePropriedades(filme);

function exibePropriedades(obj) {


    for (key in obj) {
      if (typeof obj[key] === 'string') {
        console.log(key, obj[key]);
      } else {}
    }
}


/*
//Mini projeto 6 - Múltiplos de 3 e 5

    //Criar função que retorna soma dos múltiplos de 3 e 5

somaDosMultiplos(15);

function somaDosMultiplos (limite) {
    let soma = 0;
    for (i = 0; i <= limite; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i++, soma += i);
        } else {}
    
}

*/


//Mini projeto 6 - Múltiplos de 3 e 5

    //Criar função que retorna soma dos múltiplos de 3 e 5 até x
    //Multiplos de três: 3,6,9..
    //Múltiplos de cinco: 5,10..

    //Definir número limite como parâmetro;
    //Armazena os múltiplos de 3;
    //Armazena os múltiplos de 5;
    //Soma os dois;

somaDosMultiplos(10);

function somaDosMultiplos(nLimite) {
    let multiploDeTres = 0;
    let multiploDeCinco = 0;
    for (i = 0; i <= nLimite; i++) {
        if (i % 3 === 0) 
            multiploDeTres += i;
        if (i % 5 === 0) 
            multiploDeCinco += i;
    }

    console.log(multiploDeCinco + multiploDeTres);
}


//Mini projeto 7 - Nota escolar

    //Obter média a partir de um array
    //0-59: F
    //60-69: D
    //70-79: C
    //80-89: B
    //90-100: A

let array = [70,70,80];

let media = ((array[0] + array[1] + array[2]) / 3);

function mediaDoAluno () {

    if (media < 60) {
        console.log('F');
    } else if (media >= 60 && media <= 69) {
        console.log('D');
    } else if (media >= 70 && media <= 79) {
        console.log('C');
    } else if (media >= 80 && media <= 89) {
        console.log('B');
    } else if (media >= 90 && media <=100) {
        console.log('A');
    } else {}
        
}   

mediaDoAluno ()



//Mini projeto 8 - Contador de asteriscos

    //Crie uma função que exibe a quantidade de * que a linha possui
    //exibir a quantidade de acordo com nLinhas

let nLinhas = 10;
const asterisco = '*';

exibirAsterisco (nLinhas);

function exibirAsterisco () {
    for (i = 1; i <= nLinhas; i++) {
        console.log(asterisco.repeat(i))
    }

}


//Mini projeto 9 - Números primos

    //Criar função apra mostrar números primos
    //exibir os números até um limite
    //exibir apenas os divisíveis por 1 e ele mesmo


exibirNumerosPrimos(30);

function exibirNumerosPrimos(limite) {
    if (limite >= 2) {
        console.log(2);
    }
    if (limite >= 3) {
        console.log(3);
    }
    if (limite >= 5) {
        console.log(5);
    }
    if (limite >= 7) {
        console.log(7);
    }
    for (let i = 2; i <= limite; i++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

// factory function

const cinema = {
    filme: 'Creed III',
    sala: 42,
    cadeiras: {
        cadeirasOcupadas: 240,
        cadeirasVazias: 60,
    },
    ocupacaoTotal: false,
}

function cinema1 (filme, sala, cadeirasOcupadas, cadeirasVazias, ocupacaoTotal) {
    return {
        filme,
        sala,
        cadeiras: {
            cadeirasOcupadas,
            cadeirasVazias,
        },
        ocupacaoTotal,
    }
}
    
console.log(cinema1(), cinema); 

const cineExemplo = cinema1('1408', 20, 200, 100, false);

console.log(cineExemplo); 


//natureza dinâmica dos objetos

const tenis = {
    cor: 'white',
    tamanho: 43,
}

console.log(tenis);

tenis.marca = 'Nike';

console.log(tenis);

delete tenis.marca;
console.log(tenis);

//clonando objetos

const objClone = {
    jogo: 'league of legends',
    criacao: 2009,
    classificacao: 12
}

const objClonado = Object.assign({},objClone);

console.log(objClonado);

const objClonado2 = Object.assign({
    lane: 'Mid'
},objClonado);

console.log(objClonado2);

const objCloando3 = {...objClonado2};
console.log(objCloando3);

//Math

console.log(Math.max(0,2,3,4,4));
console.log(Math.min(0,2,3,4,4));
console.log(2.4**3);
console.log(Math.floor(2.4**3));

//template ``

let template = 2000;

console.log('Nome: Bernardo \nSobrenome: Rodrigues');

const msg = 
`Estamos no 'milenio' ${template}.
Obrigado pela "atencao"`

console.log(msg);


//Mini projeto 10 - Montador de Endereço

    //Criar um objeto endereço que contém:
    //Rua
    //Cidade
    //CEP
    //exibirEndereco(endereco)


const endereco = {
    Rua: 'Genebra',
    Cidade: 'Belo Horizonte',
    CEP: 30540210,
}

function exibirEndereco1(endereco) {
    console.log(endereco);
}

exibirEndereco1(endereco);
console.log(endereco);

function exibirEndereco (endereco) {
    for (key in endereco) {
        console.log(key, endereco[key]);
    }
}

exibirEndereco(endereco);


//Mini projeto 11 - Encontre a igualdade

    //comparar se os objetos são iguais 
    //comparar se eles tem endereço de memória iguais

function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1, endereco2));

function temEnderecoDeMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(temEnderecoDeMemoriaIguais(endereco1, endereco2));


//Mini projeto 12 - Postagem de blog

    //Criar um objeto de postagem de blog com as seguintes prorpiedades:
    //Postagem:
    //título
    //mensagem
    //autor
    //visualizações
    /*comentarios
        com array de obj com Autor e Mensagem*/
    //estaAoVivo


let Postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [ 
        {autor: 'e', mensagem: 'f'},
        {autor: 'e', mensagem: 'f'} 
    ],
    estaAoVivo: true
}

console.log(Postagem);


//Exercício - Constructor Function

    //Criar um obj postagem usando uma função de construtor que contém:
    //titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo

function Postagemm (titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentarios = comentarios,
    this.estaaovivo = estaaovivo 
}

let Postagem1 = new Postagemm('a', 'b', 'c', 100, 'e', true);
console.log(Postagem1);

//Exercício - Faixa de Preço

    //Crie um array de obj de faixa de preço
    //O array de objetos deve conter:
    //tooltip (dica)
    //mínimo
    //máximo

let faixa = [
    {tooltip: 'ate R$700,00', minimo: 0, maximo: 700},
    {tooltip: 'R$700 a R$1000', minimo: 0, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 0, maximo: 9999999}
];

console.log(faixa);

    //com factory functions

function criaFaixaPreco (tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
};

const faixaPreco1 = [
    criaFaixaPreco('ate R$700,00', 0, 700),
    criaFaixaPreco('R$700 a R$1000', 0, 1000),
    criaFaixaPreco('R$1000 ou mais', 0, 9999999)
];

console.log(faixaPreco1);


//Arrays

//Adcicionando elementos ao array

    //inicio
    //meio
    //fim

//inicio
const arrayTeste =  [1,2,3,4,5];
console.log(arrayTeste);

arrayTeste.unshift(0);
console.log(arrayTeste);

//meio
arrayTeste.splice(3, 0, 'oi');
console.log(arrayTeste);

//fim
arrayTeste.push(6);
console.log(arrayTeste);


//Encontrar elementos do tipo primitivo
arrayTeste;
console.log(arrayTeste.indexOf(2), arrayTeste.indexOf(8), arrayTeste.indexOf('oi'));

arrayTeste.push(6);
console.log(arrayTeste);
console.log(arrayTeste.lastIndexOf(6));

console.log(arrayTeste.includes('oi'));

//Encontrar elementos do tipo referência

    //usando .find

const marcar = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

const marca = marcar.find(function(marca) {
    return marca.id === 1;
});

console.log(marca);

const escola = [
    {aluno: 'Bernardo', escola: 'Bernoulli'},
    {aluno: 'Bernardo', escola: 'Santa Maria'}
];

const acharEscola = escola.find(function(escolar){
    return escolar.escola === 'Bernoulli';
});

console.log(acharEscola);

    //usando arrow function

const objArrow = [
    {aluno: 'Bernardo', escola: 'Bernoulli'},
    {aluno: 'Bernardo', escola: 'Santa Maria'}
];

const arrow = objArrow.find((arrowf) => {
    return arrowf.escola === 'Santa Maria';
});

console.log(arrow)

//Removendo elementos de um array

    //remover no final .pop

console.log(arrayTeste);
arrayTeste.pop();
console.log(arrayTeste);

    //remover do inicio .shift

arrayTeste.shift();
console.log(arrayTeste);

    //remover no meio .splice

arrayTeste.splice(2,1);
console.log(arrayTeste);

arrayTeste.splice(4,2);
console.log(arrayTeste);


//Esvaziando um array

    //.lenght = 0

arrayTeste.length = 0;
console.log(arrayTeste);

//Concatenar Arrays

    //.concat

const primeiraArray = [1,2,3];
const segundaArray = [4,5,6];

const concatenadas = primeiraArray.concat(segundaArray);
console.log(primeiraArray);
console.log(segundaArray);
console.log(concatenadas);



//Dividir arrays

    //.slice

let arrayCortado = concatenadas.slice(0, 5);
console.log(arrayCortado);
arrayCortado = concatenadas.slice(1);
console.log(arrayCortado);


//Clonar arrays com o operados spread

    //spread ...

const array1 = [1,2,3];
const array2 = [4,5,6];

const spreadArray = [...array1, '+', ...array2];
console.log(spreadArray);

const clonado = [...spreadArray];
console.log(clonado);


//Interando elementosde um array

    //for

const arrayInterada = [0, 1, 2, 3, 4];

for(elemento in arrayInterada) {
    console.log(elemento);
}

    //.forEach

arrayInterada.forEach(elemento => console.log(elemento));

arrayInterada.forEach(function(elemento) {console.log(elemento)}); 



//Combinando Arrays

    //.join (adiciona())

const numbers = [0,1,2,3,4,5];

const combinado = numbers.join('.');
console.log(combinado);

    //.split (separa())

const boasVindas = 'Seja Bem vindo ao meu github';
console.log(boasVindas);

const splitBoasVindas = boasVindas.split(' ');
console.log(splitBoasVindas);

const splitJoin = splitBoasVindas.join('-');
console.log(splitJoin); //slug


//Receber dados do usuário (input)

    //prompt
    //alert

let maiorDeMinas = prompt('Qual o maior time do futebol mineiro?');

if (maiorDeMinas === 'galo' || maiorDeMinas === 'atletico') {
    alert('Certa resposta!');
} else {
    alert('Resposta errada!');
}
