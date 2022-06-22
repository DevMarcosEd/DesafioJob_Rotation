// Pergunta 01

let indice = 13
let soma = 0
let k = 0

while (k < indice) {
    k+=1
    soma = soma + k
}

console.log(soma) //Resultado = 91

// Pergunta 02
function fibonnaci(n, pertence) {
    let soma = 0
    let ant = 0
    let prox = 1

    for (let i = 0; i < n; i++) {
        soma = ant + prox
        ant = prox
        prox = soma
        console.log(soma)
    }

    if (pertence == n) {
        console.log('Este número pertence a sequência fibonnaci')
    } else {
        console.log('Este número não pertence a sequência fibonnaci')
    }
}

fibonnaci(8,8) //o outro parametro é o numero que estou verificando sé faz parte da sequencia fib
   
// Pergunta 03

// a) 1, 3, 5, 7, Resposta = 9

// b) 2, 4, 8, 16, 32, 64, Resposta = 128

// c) 0, 1, 4, 9, 16, 25, 36, Resposta = 49

// d) 4, 16, 36, 64, Resposta = 100

// e) 1, 1, 2, 3, 5, 8, Resposta = 13

// f) 2,10, 12, 16, 17, 18, 19, Resposta = 200 sequencia dos números que começam com a letra D

// Pergunta 04
//Não consegui rs, não sou muito bom em matemática :(

//Pergunta 05
function stringReversa(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(i)
        newString += str[i]
        // console.log(newString)
    }
    return newString;
}
console.log(stringReversa('hello world!'))