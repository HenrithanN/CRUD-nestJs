import { ProdutosModel } from './Produtos.Model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutosService } from './Produtos.Service';

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService) {
        
    }
    @Get()
    listarTodos(): ProdutosModel[] {
        
        return this.produtosService.listarTodos();
    }

    @Get(':id')
    listarUm(@Param() params): ProdutosModel {
        
        return this.produtosService.listarUm(params.id);
    }

    @Post()
    criarProduto(@Body() produto: ProdutosModel){
        
        this.produtosService.criarProduto(produto)
    }

    @Put()
    alterarProduto(@Body() produto: ProdutosModel): ProdutosModel{

        return this.produtosService.alterarProduto(produto);
    }

    @Delete(':id')
    deletarProduto(@Param() params){

        return this.produtosService.deletarProduto(params.id);
    }
}