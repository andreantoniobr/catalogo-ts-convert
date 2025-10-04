/*Crie uma interface Produto com as seguintes propriedades:
  nome (string)
  preco (number)
  quantidade (number)
  categoria (use enum ou union)
*/

type Categoria = string | number

interface Produto {
  nome: string,
  preco: number,
  quantidade: number,
  categoria: Categoria
}

const produtos: Produto[] = []

export function adicionarProduto(produto: Produto) {
  produtos.push(produto)
}

export function listarProdutos(): Produto[] {
  return produtos
}

export function calcularTotal(): number {
  return produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
}

export function filtrarPorCategoria(categoria: Categoria): Produto[] {
  return produtos.filter(p => p.categoria === categoria)
}
