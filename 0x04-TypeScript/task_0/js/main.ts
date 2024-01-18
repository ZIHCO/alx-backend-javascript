// Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

// create two students and append them to an array, studentList
const student1: Student = {
  firstName: 'John',
  lastName: 'DOE',
  age: 18,
  location: 'LA',
};

const student2: Student = {
  firstName: 'Foo',
  lastName: 'BAR',
  age: 19,
  location: 'NY',
};

const studentList: Array<Student> = [
  student1,
  student2
];

//Stylsheet
const styleSheet = `
  html {
    height: 100%;
    margin: 5px;
  }

  table {
    border-collapse: collapse;
  }

  td {
    padding: 10px 20px;
    border: 1px solid rgb(190,190,190);
  }

  thead {
    font-weight: bold;
  }

  td {
    cursor: pointer;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * rendering the table with vanilla js
 * @author: ZIHCO
 * @params: studentList
 */

export function tableStudentList(students: Array<Student>): void {
  const table = document.createElement('table');
  // bind table to body element
  document.body.insertAdjacentElement('beforeend', table);


  const tableHead = document.createElement('thead');
  // bind thead to table element
  table.insertAdjacentElement('beforeend', tableHead);

  const tableBody = document.createElement('tbody');
  // bind tbody to table element
  table.insertAdjacentElement('beforeend', tableBody);

  const colHead = document.createElement('tr')
  tableHead.insertAdjacentElement('beforeend', colHead);
  colHead.insertAdjacentHTML('beforeend', '<td>First Name</td>');
  colHead.insertAdjacentHTML('beforeend', '<td>Location</td>');

  for (const student of students) {
    const row = document.createElement('tr');
    tableBody.insertAdjacentElement('beforeend', row);
    row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
  }
};

tableStudentList(studentList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Creating an interface for a student';
