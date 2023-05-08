"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pessoa_1 = require("../controllers/pessoa");
const router = express_1.default.Router();
router.get('/pegarpessoa', pessoa_1.pegarPessoa);
exports.default = router;
