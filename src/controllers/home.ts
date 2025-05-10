import { Request, Response } from "express";

// archivo para importar todos los controladores
const homeGet = (req: Request, res: Response) => {
    res.render("inicio", { data: "express" });
}

export const pago = (req: Request, res: Response) => {
  res.render('pago');
};

export default homeGet;