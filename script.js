//console.log() mostra uma informação no console
console.log("Ola, Mundo!");
console.log("2 + 2");

console.log(typeof"Ola, Mundo!")//string
console.log(typeof 22)//Number
console.log(typeof true)//boolean
console.log(typeof false)//boolean

// variavel
// conts não pode ter seu valor alterado durante o programa
const nome= "LEO"
console.log(nome);

// let pode ter seu valor alterado durante o programa 
let idade = 19;
console.log(idade);

console.log("Olá " + nome, ", que tem " + idade + "anos")

idade = 20;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);


// variavel 
const name = "eduardo";
console.log(name);

const name1 ="LEONARDO"
console.log(name)


const peso = "70"
console.log(peso);


let kilos = 70;
console.log(peso);

console.log("Olá " + name1, ", que tem " + kilos + "kg");


kilos = 65;
console.log(peso);

console.log(`Olá ${name}, que tem ${kilos} kg.`);

//Metodos de string
const texto = "JavaScript"

console.log(texto.length)// conta quantos caracteres a string tem

console.log(texto.toUpperCase())// deixa as letras em maiusculo 

console.log(texto.toLowerCase())// altera todas as letras para minusculo

const nome_completo = "Leonardo Melo Sousa"
console.log(nome_completo.includes("Sousa"))// true

console.log(10 > 5)// true 
console.log(10 < 5)// false 
console.log(10 >= 10)// true
console.log(10 <= 5)// false
console.log("10" == 10)// true
console.log("10" === 10) // false
console.log(10 !== 5) //true

const idadePessoa =17

console.log(idadePessoa >=18)// false 
console.log(idadePessoa >=16) //true


const nome1 = "Leonardo Melo Sousa"

console.log(nome1 <= "sousa")// true
console.log(nome1 >= "Sousa")// false

 // coletamos a idade da pessoa 
let pessoaidade = 19;
 // verificar se a idade e maior ou igual a 18
if(pessoaidade >=18){
    // se maior que 18 então é ela é maior de idade 
console.log("Já pode Ser Preso HAHA!")
}else{
    // senão, que 18 então ela é menor de idade
console.log("Não entra na Balada!")
}

// coletamos a idade da pessoa
    let idadeVotação = 16

// verificar se a idade da pessoa é maior que 70
if(idadeVotação > 70){
    
    console.log("Voce não é obrigado a votar!")
    }else if(idadeVotação >= 18) {
        // senão se a idade da pessoa for maior ou igual a 18 
        console.log("Voce tem que votar obrigatoriamente!")
    }else if(idadeVotação >=16){
        // senão se a idade da pessoa for maior ou igual a 16
console.log("Voce não e obrigado a votar, mas caso queira pode!")
    }else{
        // senão for nenhuma das altenartivas anteriores
        console.log("Voce NÃO pode votar!")
    }


// — Aprovação escolar
const notafinal =7
if (notafinal <=7)
console.log("Aprovado")
else{
    console.log("Reprovado")
}

//— Comparação de dois números

let maiornumero = 8;
let menornumero = 10;
console.log (10 !== 8)
if(maiornumero >menornumero)
    console.log("maiornumero") 
else if (maiornumero <menornumero)
    console.log("menornumero")
else
console.log("senha_incorreta")

    //  — Verificação de senha

    const senha_senai = "senai123"
    if (senha_senai >= "senai123")
        console.log("Acesso autorizado")
    else{
        console.log("Acesso Negado")
    }
    
    

    // — Classificação de temperatura
        
    let temperatura = 27

    if(temperatura < 18){
        console.log("Frio");
    }else if (temperatura <= 27){
        console.log("Agradavel");
    }else{
        console.log("Quente")
    }

    //  — Classificação de nota

    let nota = 10

    if(nota < 0 || nota > 10){
        console.log("Nota inválida");
    }else if (nota >= 9){
        console.log("Excelente");
    } else if (nota >= 7){
        console.log("Bom");
    }else if (nota >= 5){
        console.log("Regular");
    }else{
        console.log("Insuficiente")
    }

    // — Dia da semana

    let semana = 7

    if(dia = 1){
        console.log("domingo");
    }else if(dia == 2){
        console.log("Segunda feira");
    }else if(dia == 3){
        console.log("Terça feira");
    }else if (dia == 4){
        console.log("Quarta feira");
    } else if (dia == 5){
        console.log("Quinta feira");
    }else if (dia == 6){
        console.log("Sexta feira")
    }else if (dia == 7){
        console.log("Sabado");
    }else {
            console.log("Dia inválido");
        }




let idadedirigir = 19;
let temCNH = true;
let temCARRO = false;

if (idadedirigir >= 18 && temCNH == true && temCARRO == true){
    console.log("Voce Pode dirigir!")
}else{
    console.log("Voce Não Pode dirigir!")
}

let ehProfessor = false;
let ehAluno = false;

if (ehProfessor == true || ehAluno == true ){
    console.log("Voce tem direito a meia entrada!")
}else{
    console.log("Voce não tem direito a meia entrada!")
}

// && - e
// || = ou 

// — 01 Número dentro do intervalo

let numero = 38;

if(numero > 10 && numero < 50){
    console.log("Seu numero esta entre 10 e 50 ")
}
else{
    console.log("Seu numero esta fora do intervalo ")
}

//  — 02 Elegibilidade para estágio

let idadeestagio = 18

if (idadeestagio > 16 && idadeestagio < 24){
    console.log("O candidato atende aos requisitos da vaga")
}
else{
    console.log("O candidato Não atende aos requisitos")
}

// 03 — Frete grátis

let valorcompra = 117;
let assinante = true

if(valorcompra == 117 || assinante){
    console.log("Voce tem direto a frete gratis")
}else{
    console.log("Voce nao tem direito a frete gratis ")
}

//  04 Dia de descanso

const dia = "sexta"

if (dia = "sabado" || "domingo"){
    console.log("fim de semana")
}else{
    console.log("Dia util")
}


