"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const Produtos_Model_1 = require("./Produtos.Model");
let ProdutosService = class ProdutosService {
    constructor() {
        this.produtos = [
            new Produtos_Model_1.ProdutosModel("LIV01", "TDD E DDD na prática", 29.90),
            new Produtos_Model_1.ProdutosModel("LIV02", "Iniciando com javaScript", 29.90),
            new Produtos_Model_1.ProdutosModel("LIV03", "Fundamentos Angular", 29.90)
        ];
    }
    listarTodos() {
        return this.produtos;
    }
    listarUm(id) {
        return this.produtos[id];
    }
    criarProduto(produto) {
        return this.produtos.push(produto);
    }
    alterarProduto(produto) {
        return produto;
    }
    deletarProduto(id) {
        this.produtos.pop();
    }
};
ProdutosService = __decorate([
    common_1.Injectable()
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=Produtos.Service.js.map