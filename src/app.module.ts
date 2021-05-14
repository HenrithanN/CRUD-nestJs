import { ProdutosService } from './Produtos/Produtos.Service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './Produtos/Produtos.Controller'
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'admin',
      database:'livraria',
      
    })
  ],
  controllers: [
    AppController,
    ProdutosController
  ],
  providers: [
    AppService,
    ProdutosService
],
})
export class AppModule {}
