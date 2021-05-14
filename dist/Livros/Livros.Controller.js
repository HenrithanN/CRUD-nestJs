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
exports.LivrosController = void 0;
const Livros_Model_1 = require("./Livros.Model");
const common_1 = require("@nestjs/common");
const Livros_Service_1 = require("./Livros.Service");
let LivrosController = class LivrosController {
    constructor(livrosService) {
        this.livrosService = livrosService;
    }
    listarTodos() {
        return this.livrosService.listarTodos();
    }
    listarUm(params) {
        return this.livrosService.listarUm(params.id);
    }
    criarLivro(livro) {
        this.livrosService.criarLivro(livro);
    }
    alterarLivro(livro) {
        return this.livrosService.alterarLivro(livro);
    }
    deletarLivro(params) {
        return this.livrosService.deletarLivro(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LivrosController.prototype, "listarTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Livros_Model_1.LivrosModel)
], LivrosController.prototype, "listarUm", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Livros_Model_1.LivrosModel]),
    __metadata("design:returntype", void 0)
], LivrosController.prototype, "criarLivro", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Livros_Model_1.LivrosModel]),
    __metadata("design:returntype", Livros_Model_1.LivrosModel)
], LivrosController.prototype, "alterarLivro", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LivrosController.prototype, "deletarLivro", null);
LivrosController = __decorate([
    common_1.Controller('produtos'),
    __metadata("design:paramtypes", [Livros_Service_1.LivrosService])
], LivrosController);
exports.LivrosController = LivrosController;
//# sourceMappingURL=Livros.Controller.js.map