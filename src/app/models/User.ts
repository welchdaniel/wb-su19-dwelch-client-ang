export default class User {
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  constructor(username: String, password: String, firstName: String, lastName: String) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}