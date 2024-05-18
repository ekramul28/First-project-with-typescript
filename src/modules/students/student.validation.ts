import Joi from 'joi';

const UserNameSchema = Joi.object({
  firstName: Joi.string().max(20).required().messages({
    'string.base': 'First name must be a string',
    'string.max': 'First name should have a maximum length of 20',
    'any.required': 'First name is required',
  }),
  middleName: Joi.string().allow(null, ''),
  lastName: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.base': 'Last name must be a string',
      'string.pattern.base': '{#value} is not valid',
      'any.required': 'Last name is required',
    }),
});

const GuardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': "Father's occupation is required",
  }),
  fatherContactNo: Joi.number().required().messages({
    'any.required': "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    'any.required': "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': "Mother's occupation is required",
  }),
  motherContactNo: Joi.number().required().messages({
    'any.required': "Mother's contact number is required",
  }),
});

const LocalGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    'any.required': "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    'any.required': "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    'any.required': "Local guardian's address is required",
  }),
});

export const StudentSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student ID is required',
  }),
  name: UserNameSchema.required().messages({
    'any.required': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Gender must be either male or female',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required',
  }),
  guardian: GuardianSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: LocalGuardianSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),
  profileImage: Joi.string().required().messages({
    'any.required': 'Profile image is required',
  }),
  isActive: Joi.string().valid('active', 'block').default('active'),
});
