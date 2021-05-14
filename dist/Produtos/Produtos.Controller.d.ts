import { ProdutosModel } from './Produtos.Model';
import { ProdutosService } from './Produtos.Service';
export declare class ProdutosController {
    private produtosService;
    constructor(produtosService: ProdutosService);
    listarTodos(): ProdutosModel[];
    listarUm(params: any): ProdutosModel;
    criarProduto(produto: ProdutosModel): void;
    alterarProduto(produto: ProdutosModel): ProdutosModel;
    deletarProduto(params: any): void;
}
