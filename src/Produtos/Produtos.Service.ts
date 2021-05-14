import { Injectable } from "@nestjs/common";
import { ProdutosModel } from "./Produtos.Model";

@Injectable()
export class ProdutosService{

    
    produtos: ProdutosModel[] = [
        new ProdutosModel("LIV01", "TDD E DDD na prática", 29.90),
        new ProdutosModel("LIV02", "Iniciando com javaScript", 29.90),
        new ProdutosModel("LIV03", "Fundamentos Angular", 29.90)
    ]

    listarTodos():ProdutosModel[]{

        return this.produtos;
    }

    listarUm(id: number):ProdutosModel{

        return this.produtos[id];
    }
    
    criarProduto(produto: ProdutosModel){

        return this.produtos.push(produto);
    }

    alterarProduto(produto: ProdutosModel) : ProdutosModel{

        return produto;
    }

    deletarProduto(id: number){

        this.produtos.pop();
    }

}