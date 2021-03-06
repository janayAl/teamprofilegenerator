//require the employee object so we can use it to extend on it
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  };

  getSchool() {
    return this.school;
  };

  getRole() {
    return "Intern";
  }

}
//exports the Intern object/constructor
module.exports = Intern;