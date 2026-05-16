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

}
