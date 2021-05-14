"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
const common_1 = require("@nestjs/common");
const Livros_Model_1 = require("./Livros.Model");
let LivrosService = class LivrosService {
    constructor() {
        this.livros = [
            new Livros_Model_1.LivrosModel("LIV01", "TDD E DDD na prática", 29.90),
            new Livros_Model_1.LivrosModel("LIV02", "Iniciando com javaScript", 29.90),
            new Livros_Model_1.LivrosModel("LIV03", "Fundamentos Angular", 29.90)
        ];
    }
    listarTodos() {
        return this.livros;
    }
    listarUm(id) {
        return this.livros[id];
    }
    criarLivro(livro) {
        return this.livros.push(livro);
    }
    alterarLivro(livro) {
        return livro;
    }
    deletarLivro(id) {
        this.livros.pop();
    }
};
LivrosService = __decorate([
    common_1.Injectable()
], LivrosService);
exports.LivrosService = LivrosService;
//# sourceMappingURL=Livros.Service.js.map