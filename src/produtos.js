const produtos = []

function adicionarProduto(produto) {
  produtos.push(produto)
}

function listarProdutos() {
  return produtos
}

function calcularTotal() {
  return produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
}

function filtrarPorCategoria(categoria) {
  return produtos.filter(p => p.categoria === categoria)
}

export {
  produtos,
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria
}
