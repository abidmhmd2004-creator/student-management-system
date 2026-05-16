import { Request , Response } from "express";
import { StudentService } from "../services/student.service";


export class StudentController {

    constructor(private studentService : StudentService) {}

    async createStudent (req : Request , res : Response) {

        try{

            await this.studentService.createStudent(req.body);

            res.redirect("/");
        }catch(error : any){

            res.status(400).send(error.message);
        }
    }

    async getAllStudents (req : Request , res : Response) {

        try {

            const students = await this.studentService.getAllStudents()

            res.render("users/list",{ students });

        }catch(error :any){
            
            res.status(500).send(error.message);
        }
    }


    async updateStudent (req : Request , res: Response) {

        try{
            await this.studentService.updateStudent(
                req.params.id as string,
                req.body
            );

            res.redirect("/");

        }catch(error : any){
            res.status(400).send(error.message);
        }
    }

    async deleteStudent(req : Request , res : Response) {

        try{
            
            await this.studentService.deleteStudent(req.params.id as string);

            res.redirect("/");

        }catch(error : any){

            res.status(400).send(error.message);
        }
    }
}