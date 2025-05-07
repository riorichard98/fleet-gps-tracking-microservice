import { Request, Response } from "express";

export const invalidRouter = (_: Request, res: Response) => {
    res.status(404).json('url not found')
};