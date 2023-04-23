enum ProdutoStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}


function checarProduto(status: number){

    switch(status){
        case ProdutoStatus.Ativo:
            console.log("Produto Disponível")
            break;
        
        case ProdutoStatus.Inativo:
            console.log("Produto Não Encontrado");
            break;

        case ProdutoStatus.Indisponivel:
            console.log("Produto Aguardando Estoque")
            break;
    }
}

checarProduto(1);