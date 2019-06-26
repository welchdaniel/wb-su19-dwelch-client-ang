import Page from './Page';
import User from './User';

export default class Website {
  title: String;
  author: User;
  pages: Page[];
  constructor(title: String, author: User, pages: Page[]) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}