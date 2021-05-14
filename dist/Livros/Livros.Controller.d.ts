import { LivrosModel } from './Livros.Model';
import { LivrosService } from './Livros.Service';
export declare class LivrosController {
    private livrosService;
    constructor(livrosService: LivrosService);
    listarTodos(): LivrosModel[];
    listarUm(params: any): LivrosModel;
    criarLivro(livro: LivrosModel): void;
    alterarLivro(livro: LivrosModel): LivrosModel;
    deletarLivro(params: any): void;
}
