import { Router } from "express";
import { getEmployees, postEmployees, putEmployees, deleteEmployees, getEmployee } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/empleados", getEmployees);

router.get("/empleados/:id", getEmployee);

router.post("/empleados", postEmployees);

router.patch("/empleados/:id", putEmployees);

router.delete("/empleados/:id", deleteEmployees);

export default router;
