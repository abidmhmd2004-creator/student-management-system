import Student , { IStudent } from "../models/student.model.js";

export class Studentrepository {

    async createStudent(data : Partial<IStudent>) {
        return await Student.create(data);
    }

    async getAllStudents() {
        return await Student.find();
    }

    async updateStudent(id : string,data: Partial<IStudent>) {
        return await Student.findByIdAndUpdate(id,data , {new : true})
    }

    async deleteStudent(id :string) {
        return await Student.findByIdAndDelete(id);
    }
}

