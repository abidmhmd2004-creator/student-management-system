import { response, Router } from "express";
import { StudentController } from "../controllers/student.controller";
import { StudentService } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";

const router = Router();


// Dependency injection

const repository = new StudentRepository();
const service = new StudentService(repository);
const controller = new StudentController(service);


// Routs

router.get("/",
    (req,res)=> controller.getAllStudents(req,res));

router.post("/",
    (req,res)=>controller.createStudent(req,res));


export default router;