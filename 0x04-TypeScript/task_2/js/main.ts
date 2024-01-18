export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  };

  getCoffeeBreak() {
    return 'Getting a coffee break';
  };

  workDirectorTasks() {
    return 'Getting to director tasks';
  };
};

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  };

  getCoffeeBreak() {
    return 'Cannot have a break';
  };

  workTeacherTasks() {
    return 'Getting to work';
  };
};

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  const employee = salary < 500? new Teacher() : new Director();
  return employee;
};

export function isDirector(employee: (Teacher | Director)) {
  return employee instanceof Director;
}

export function executeWork(employee: (Teacher | Director)) {
  const employeeIsDirector = isDirector(employee);
  if (employeeIsDirector) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}


type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
