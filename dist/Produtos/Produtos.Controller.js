"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const Produtos_Model_1 = require("./Produtos.Model");
const common_1 = require("@nestjs/common");
const Produtos_Service_1 = require("./Produtos.Service");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    listarTodos() {
        return this.produtosService.listarTodos();
    }
    listarUm(params) {
        return this.produtosService.listarUm(params.id);
    }
    criarProduto(produto) {
        this.produtosService.criarProduto(produto);
    }
    alterarProduto(produto) {
        return this.produtosService.alterarProduto(produto);
    }
    deletarProduto(params) {
        return this.produtosService.deletarProduto(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProdutosController.prototype, "listarTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Produtos_Model_1.ProdutosModel)
], ProdutosController.prototype, "listarUm", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Produtos_Model_1.ProdutosModel]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "criarProduto", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Produtos_Model_1.ProdutosModel]),
    __metadata("design:returntype", Produtos_Model_1.ProdutosModel)
], ProdutosController.prototype, "alterarProduto", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "deletarProduto", null);
ProdutosController = __decorate([
    common_1.Controller('produtos'),
    __metadata("design:paramtypes", [Produtos_Service_1.ProdutosService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=Produtos.Controller.js.map