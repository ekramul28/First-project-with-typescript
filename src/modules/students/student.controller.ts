import { Request, Response } from 'express';
import { StudentServices } from './students.services';
import { StudentValidationSchema } from './student.validation';

const createdStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation suing joi

    const { student: studentData } = req.body;

    const { error } = StudentValidationSchema.validate(studentData);

    const result = await StudentServices.createStudentIntoDB(studentData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error?.details,
      });
    }

    // console.log(studentData);

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
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      err,
    });
    console.log(err);
  }
};

export const StudentControllers = {
  createdStudent,
  getAllStudents,
  getSingleStudent,
};
