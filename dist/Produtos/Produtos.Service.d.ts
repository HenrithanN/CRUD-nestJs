import { ProdutosModel } from "./Produtos.Model";
export declare class ProdutosService {
    produtos: ProdutosModel[];
    listarTodos(): ProdutosModel[];
    listarUm(id: number): ProdutosModel;
    criarProduto(produto: ProdutosModel): number;
    alterarProduto(produto: ProdutosModel): ProdutosModel;
    deletarProduto(id: number): void;
}
