let valor //não atribuir valor
console.log(valor)

valor=null // auxência de valor
console.log(valor)
//console.log(valor.toString())// Erro!

const produto = {}
console.log((produto.preco))
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
