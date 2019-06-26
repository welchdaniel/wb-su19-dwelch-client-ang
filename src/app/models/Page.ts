import Row from './Row';

export default class Page {
  title: String;
  rows: Row[];
  constructor(title: String, rows: Row[]) {
    this.title = title;
    this.rows = rows;
  }
}