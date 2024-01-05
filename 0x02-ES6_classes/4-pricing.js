import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('Amount is a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Currency is an object');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new Error('Amount is a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new Error('Currency is an object');
    }
  }

  displayFullPrice() {
    return `${this._amount.toString()} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Amount and ConversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
