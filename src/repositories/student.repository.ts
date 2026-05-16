import Student , { IStudent } from "../models/student.model";

export class StudentRepository {

    async createStudent(data : Partial<IStudent>) : Promise<IStudent> {
        return await Student.create(data);
    }

    async getAllStudents() : Promise<IStudent[]> {
        return await Student.find().sort({createdAt: 1});
    }

    async updateStudent(id : string,data: Partial<IStudent>) :Promise<IStudent | null>{
        return await Student.findByIdAndUpdate(id,data , {new : true})
    }

    async deleteStudent(id :string) : Promise<IStudent | null>{
        return await Student.findByIdAndDelete(id);
    }
}

