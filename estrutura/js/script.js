let cargo = 'gerente';
let salario = 2000;

switch (cargo){
    case 'gerente':
        salario = salario * 1.5;
        document.write(salario + '<br>');

    case 'surpervisor':
        salario = salario * 1.10;
        document.write(salario+ '<br>');

    default:
        salario = salario * 1.05;
        document.write(salario = '<br>')

}

document.write('Função sem parâmetro' + '<br>');

function imprimirnoconsole(){
    document.write('Olá mundo' + '<br>');
}

function imprimirnoconsole();

document.write('Função com parâmetro' + '<br>');

function calc(n1, n2){
    return n1 * n2;
}

let resultado = calc(15,5);
document.write(resultado);

document.write('Função por variável' + '<br>');

const textporparametro = function (texto){
    document.write(texto);
}

textporparametro('testando função por variavel' + '<br>');

let y = 10;

function imprimir(){
    let y = 150;
    document.write(y);
}

imprimir(y);

document.write('<br>');

document.write(y);
document.write('<br>');

document.write('fução arrow function' + '<br>');

let teste = () => {
    document.write('testando arrow fuction');
}

teste();

let num = [1,2,5,7];
let nome = ['ana', 'paula', 'pedro'];
let bool = [true, false];
let misturado = [1, 'matheus', true];

document.write(num[2]);

document.write('propriedade' + '<br>');

let nomes = 'josé costa';
document.write(nomes.length);


document.write('<br>');


let marca = 'nike';


document.write(marca.toLocaleLowerCase());
document.write('<br>');
document.write(marca.toLocaleLowerCase());