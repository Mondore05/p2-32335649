import { Request, Response } from "express";

// archivo para importar todos los controladores
const homeGet = (req: Request, res: Response) => {
    res.render("inicio", { data: "express" });
}

// Ruta para la vista de pago
export const pago = (req: Request, res: Response) => {
  res.render('pago');
};

export const contacto = (req: Request, res: Response) => {
  res.render('contacto');
};
export default homeGet;