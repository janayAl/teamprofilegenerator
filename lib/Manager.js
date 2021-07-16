const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id,  email);
    this.officeNumber = officeNumber;
    
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager

// useHorn() {
//   console.log(this.sound);
// }

// crewSoundOff() {
//   this.crew.forEach((member) => {
//     console.log(`${member} reporting for duty!`);
//   });
// }
// }

// const boatPassengers = [
// 'Blackbeard',
// 'Mary Read',
// 'Henry Morgan',
// 'Madame Cheng',
// ];

// const boat = new Boat(16, 'sailboat', boatPassengers);

// console.log('---BOAT---');
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();
