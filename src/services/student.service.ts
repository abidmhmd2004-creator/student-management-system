import { StudentRepository } from "../repositories/student.repository";
import { IStudent } from "../models/student.model";

export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async createStudent(data: Partial<IStudent>) {
    if (!data.name || !data.age || !data.grade) {
      throw new Error("All feilds are requred");
    }

    if (data.age <= 0) {
      throw new Error("Age must be greater than 0");
    }

    return await this.studentRepository.createStudent(data);
  }

  async getAllStudents() {
    
    return await this.studentRepository.getAllStudents();
  }

  async updateStudent(id : string,data: Partial<IStudent>) {

    if(data.age && data.age <=0){
      throw new Error("Age must be greater than 0");
    }

    return await this.studentRepository.updateStudent(id,data)
  }

  async deleteStudent(id : string){
    return await this.studentRepository.deleteStudent(id);
  }
}
