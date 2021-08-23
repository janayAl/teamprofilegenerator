//require the employee object so we can use it to extend on it
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = School; 
    this.role = "Intern";
  };

  getSchool(){
    return this.school;
  };

  //getRole () {
  //   return "Intern";
  // } this way may work too, but this.role is written in the constructor 

}
//exports the Intern object/constructor
module.exports = Intern;