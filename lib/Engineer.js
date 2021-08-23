//require the employee object so it can be used to extend new properties
const Employee = require('./lib/Employee.js');

//creating an engineer object that will add to the employee object using extend
class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email); //super is the Engineer object that's exported
    this.Github = Github;
    // this.role = Engineer;
  }

  getGitHub() { // will return the github info from the input
    return this.GitHub;

  }
  // make role engineer
  getRole() {
    return "Engineer";
  }

}
//exports the Engineer object
module.exports = Engineer;

