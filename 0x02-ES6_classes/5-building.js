export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
