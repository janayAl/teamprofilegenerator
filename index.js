//require the modules for prompts and writing
const inquirer = require('inquirer');
const fs = require('fs');

//import all of the tables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// generate html 
const generateHTML = require('./src/generateHTML.js')

const arrOfEmp = []; //empty array of the teams

//first set of prompts to enter team manager's name, 
// employee ID, email, office number//
function menu() {
  inquirer.prompt([
    {
      message: "Please choose an option to build team",
      name: "choice",
      type: "list",
      choices: ["Engineer", "Intern", "Finish building team"]
    }
  ]).then(answer => {  //call the engineer function prompts if chosen
    switch (answer.addEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Finish building team":
        generateHTML();
        break;


    }

  })

}


menu();

function addManager(manager) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this team?',
    },

    {
      type: 'input',
      name: 'id',
      message: 'Enter the id'
    },

    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address',


    },

    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number',
    },
  ]).then(managerAnswer => {
    // console.log(answer)
    //do something with information about manager
    const newManager = new Manager(managerAnswer.name, managerAnswer.id, managerAnswer.email, managerAnswer.office)
    console.log(newManager)
    // console.log(newManager.getRole())
    arrOfEmp.push(newManager);
    console.log(newManager);
    // call the main menu function
    menu()
  })
}
addManager(); //calls the addmanager function to start the prompts

// new menu function with prompts for add engineer, or intern, 
//or finish building team//
// const newMenu() {
// }

//add engineer info
funcion  addEngineer(engineer) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'Enter your name'
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter your id'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Enter your Email address'
    },


    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your Github username?',
    },
  ]).then(engineerAnswer => {
    // console.log(answer)
    //do something with information about manager
    const newEngineer = new Engineer(EngineerAnswer.engineerName, EngineerAnswer.engineerId, engineerAnswer.engineerEmail, engineerAnswer.engineerGithub)
    console.log(newEngineer)
    arrOfEmp.push(newEngineer);
    console.log(newEngineer);
    menu();
  })
}


//genereate intern function prompts
function addIntern(intern) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Enter your name'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Enter your id'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Enter your Email address'
    },

    {
      type: 'input',
      name: 'internGithub',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your School?',
    },
  ]).then(internAnswer => {
    // console.log(answer)
    //do something with information about intern 
    const newIntern = new Intern(internAnswer.internName, internAnswer.internId, internAnswer.internEmail, internAnswer.internGithub)
    console.log(newIntern)
    arrOfEmp.push(newIntern);
    console.log(newIntern);
    menu();
  })
}

// generateContent() {
//   const htmlPageContent = generateHTML(answers);
//   //       run HTML create function
//   //       using that array
//   fs.writeFileSync('./dist/index.html', generateHTML(arrOfEmp))
// }

// generatePage(){
//   .then((data) => {
//   const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     );


// const writeFile = data => {
//   fs.writeFile('./dist/index.html', data, err => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log('Successfully created html file')
//     }
//   })
// };




//   });




// create writeFile function using promises instead of a callback function

