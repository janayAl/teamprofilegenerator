class Employee {
    constructor(name, id, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      } 
      
      getName () {
        return this.name;
      }
      getId() {
        return this.id;
      }
      getEmail() {
        return this.email;
      }

      getRole() {
        return "Employee";
      }

  
        // this.getName = () => {
        //   console.log (``)
       
    //       this.getID = () => {
    //           console.log (``)
    //         }
    //           this.getEmail = () => {
    //             console.log (``)
    //             this.getRole = () => { //Does this return employee? or leave it empty?
    //                 console.log (``)
    // }
}
  //   }

  //   printInfo() {
  //     console.log(`This vehicle has ${this.numberOfWheels} wheels`);
  //     console.log(`This vehicle has an id of ${this.id}`);
  //   }
  // }
  module.exports = Employee;