"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pegarArrayPessoa = void 0;
const pessoas = [
    {
        id: 1,
        nome: 'Victor',
        idade: 14
    },
    {
        id: 2,
        nome: 'Douglas',
        idade: 21
    }
];
const pegarArrayPessoa = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const pessoa = pessoas.filter((pessoa) => {
        return pessoa.id == id;
    });
    return pessoa;
});
exports.pegarArrayPessoa = pegarArrayPessoa;
