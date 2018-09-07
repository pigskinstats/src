
const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

class GameDate {
  constructor(date) {
    this._date = date;
  }

  static fromWolfeDate(wolfeDate) {
    return new GameDate(new Date(wolfeDate));
  }

  get month() {
    return MONTHS[this._date.getMonth()];
  }

  get day() {
    return this._date.getDate();
  }

  get dayOfWeek() {
    return DAYS[this._date.getDay()];
  }

  get year() {
    return this._date.getYear() + 1900;
  }

  get unix() {
    return this._date.getTime() / 1000;
  }

  toString() {
    return `${this.dayOfWeek}, ${this.month} ${this.day}`;
  }
}

export { GameDate };
