// Função sem retorno...

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(3)//Imprime Not A Number -> NaN
imprimirSoma(3,4,5,6,7)// Imprime a soma dos dois primeiros números
imprimirSoma()//Imprime Not A Number -> NaN


//Função com retorno...

function soma(a, b=1){
    return a+b
}

console.log(soma(2,3))
console.log(soma())