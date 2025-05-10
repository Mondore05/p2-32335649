import { Router } from "express";
import homeGet from "../controllers/home";

const router: Router = Router();

router.get("/", homeGet);


router.get('/pago', (req, res) => {
  res.render('pago');
});

export default router;
