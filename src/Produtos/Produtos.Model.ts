import { Table } from "sequelize-typescript";

@Table
export class ProdutosModel{
    
    id: number;
    codigo: string;
    nome: string;
    preco: number;
    
    constructor(codigo: string, nome: string, preco: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}