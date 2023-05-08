import express, { Router } from "express";
import { pegarPessoa } from "../controllers/pessoa";

const router = express.Router()

router.get('/pegarpessoa', pegarPessoa)

export default router