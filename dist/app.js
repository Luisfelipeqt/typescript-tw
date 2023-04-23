"use strict";
var ProdutoStatus;
(function (ProdutoStatus) {
    ProdutoStatus[ProdutoStatus["Ativo"] = 1] = "Ativo";
    ProdutoStatus[ProdutoStatus["Inativo"] = 2] = "Inativo";
    ProdutoStatus[ProdutoStatus["Indisponivel"] = 3] = "Indisponivel";
})(ProdutoStatus || (ProdutoStatus = {}));
function checarProduto(status) {
    switch (status) {
        case ProdutoStatus.Ativo:
            console.log("Produto Disponível");
            break;
        case ProdutoStatus.Inativo:
            console.log("Produto Não Encontrado");
            break;
        case ProdutoStatus.Indisponivel:
            console.log("Produto Aguardando Estoque");
            break;
    }
}
checarProduto(1);
