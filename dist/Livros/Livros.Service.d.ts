import { LivrosModel } from "./Livros.Model";
export declare class LivrosService {
    livros: LivrosModel[];
    listarTodos(): LivrosModel[];
    listarUm(id: number): LivrosModel;
    criarLivro(livro: LivrosModel): number;
    alterarLivro(livro: LivrosModel): LivrosModel;
    deletarLivro(id: number): void;
}
