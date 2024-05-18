export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: number;
  motherName: string;
  motherOccupation: string;
  motherContactNo: number;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  permanentAddres: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'block';
};
