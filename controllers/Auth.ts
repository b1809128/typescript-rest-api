import { Auth, AuthInput } from "../models/Auth"
import { Request, Response } from 'express';
exports.CreateAuthentication = async (req: Request, res: Response) => {
    try {
        const { subject, permission, status } = req.body
        const authInput: AuthInput = { subject, permission, status }
        const createAuth = Auth.create(authInput)
        //TODO: Response
        res.status(200).send({ data: authInput, createAuth: createAuth })

    } catch (error) {
        console.log(error);
    }
}

exports.GetAllInformation = async (req: Request, res: Response) => {
    try {
        const getAll = await Auth.find();
        res.status(200).json(getAll);
    } catch (error) {
        console.log({ err: error });

    }
}