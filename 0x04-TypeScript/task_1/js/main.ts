export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
};

export interface Directors extends Teacher {
  numberOfReports: number;
};

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

export interface Student {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

export class StudentClass implements Student {
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
  return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }

}
