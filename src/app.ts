import {
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria
} from './produtos.js'



adicionarProduto({ nome: 'Notebook', preco: 3000, quantidade: 2, categoria: 'Eletrônicos' })
adicionarProduto({ nome: 'Camiseta', preco: 50, quantidade: 5, categoria: 'Vestuário' })
adicionarProduto({ nome: 'Fone de Ouvido', preco: 200, quantidade: 3, categoria: 'Eletrônicos' })

console.log('Todos os produtos:')
console.log(listarProdutos())

console.log('\nTotal em estoque:')
console.log(calcularTotal())

console.log('\nFiltrar por Eletrônicos:')
console.log(filtrarPorCategoria('Eletrônicos'))
