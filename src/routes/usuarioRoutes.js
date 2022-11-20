import { Router } from "express";
import { methods as materiaController } from "./../controllers/materia.controller";


const router = Router();

router.get("/", materiaController.getMaterias);
router.get("/:id", materiaController.getMateria);
router.post("/", materiaController.addMateria);
router.put("/:id", materiaController.updateMateria);
router.delete("/:id", materiaController.deleteMateria);

export default router;