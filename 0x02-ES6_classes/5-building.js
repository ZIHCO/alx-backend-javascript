export default class Building {
  constructor(sqft) {
    try {
      if (this.constructor !== Building) {
        if (this.evacuationWarningMessage === undefined) {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
      }
      /*if (typeof sqft !== 'number') {
        throw TypeError('Sqft must be a number');
      }*/
      this._sqft = sqft;
    } catch (err) {
      console.error(err.toString());
    }
  }

  set sqft(value) {
    try {
      /*if (typeof value !== 'number') {
        throw TypeError('Sqft must be a number');
      }*/
      this._sqft = value;
    } catch (err) {
      console.error(err);
    }
  }

  get sqft() {
    return this._sqft;
  }
}
