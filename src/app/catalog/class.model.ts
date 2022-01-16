export interface IClass {
  classId: string;
  course: ICourse;
  professor: string;
  days: string;
  time: number;
  seatsAvailable: number;
  enrolled: boolean;
  processing: boolean;
}

export interface ICourse {
  courseNumber: string;
  courseName: string;
  creditHours: number;
  description: string;
}
