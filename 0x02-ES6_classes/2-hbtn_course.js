export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(value) {
    if (typeof value === 'object') {
      this._students = value;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
