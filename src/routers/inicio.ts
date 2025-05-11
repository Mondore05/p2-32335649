import { Router } from "express";
import homeGet from "../controllers/home";

const router: Router = Router();

router.get("/", homeGet);

router.get('/contacto', (req, res) => {
  res.render('contacto');
});

router.get('/comentarios', (req, res) => {
  res.render('comentarios');
});

router.get('/pago', (req, res) => {
  res.render('pago');
});

export default router;
