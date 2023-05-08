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
exports.pegarPessoa = void 0;
const pessoa_model_1 = require("../models/pessoa_model");
const pegarPessoa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pessoaId = req.body.id;
    const rest = yield (0, pessoa_model_1.pegarArrayPessoa)(pessoaId);
    if (rest.length == 0) {
        res.status(400).json({ message: 'O usuário de ID não foi encontrado!' });
    }
    res.status(200).json(rest);
});
exports.pegarPessoa = pegarPessoa;
