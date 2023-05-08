import { Request, Response } from "express";
import { pegarArrayPessoa } from "../models/pessoa_model";

export const pegarPessoa = async(req: Request, res: Response) => {
    const pessoaId = req.body.id
    const rest = await pegarArrayPessoa(pessoaId)
    if(rest.length == 0){
        res.status(400).json({message: 'O usuário de ID não foi encontrado!'})
    }
    res.status(200).json(rest)
}