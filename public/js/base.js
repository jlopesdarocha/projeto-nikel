const nome = "Juliano Rocha";
let nome2 = "";
let pessoaDefault = {
    nome: "Juliano Rocha",
    idade: "40",
    trabalho: "programador",
}

let nomes = ["Juliano", "Maria", "Pedro", "João", "Zezinho"];

let pessoasListaVazia = [];

let pessoas = [{
    nome:"Juliano",
    idade:"40",
    trabalho:"programador",
},
{
    nome:"Maria",
    idade:"25",
    trabalho: "UX/UI designer"
}
];

function alterarNome(){
    nome2 = "Maria Silva";
    console.log("valor alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

console.log("Nome");
console.log(pessoa.nome);

console.log("idade");
console.log(pessoa.idade);

console.log("trablho");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}



function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS-------------");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("idade");
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);

        
    })
}

imprimirPessoas();

adicionarPessoa({
    nome:"pedro silva",
    idade: "28",
    trabalho: "porteiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

/*imprimirPessoa({
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI designer",
});*/




//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();