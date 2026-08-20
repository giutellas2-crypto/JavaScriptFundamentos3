const produto = {
    nome: "mouse",
    preco: 40
};

console(produto);

produto.nome = "teclado";
produto.nome.estoque = 37;

console.log(produto);