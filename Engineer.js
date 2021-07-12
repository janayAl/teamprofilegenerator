const Employee = require('./Employee');

class Manager extends Employee {
  constructor(Github) {
    super(Employeename, id,  email);
    this.Github = Github; //githubusername
    this.getRole = () => {
      console.log (`Engineer`)  //double check this part. Should return manager
  }
  this.getGithub = () => {
    console.log (`${this.Github}`) 
}
}
}