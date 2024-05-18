import { Request, Response } from 'express';
import { StudentServices } from './students.services';

const createdStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    console.log(studentData);

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createdStudent,
  getAllStudents,
  getSingleStudent,
};
