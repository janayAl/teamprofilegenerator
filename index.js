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
    switch(answer.addEmployee){
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


const addManager =() => {
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
  ]).then(answer => {
    // console.log(answer)
    //do something with information about manager
    const newManager =  new Manager(answer.name, answer.id, answer.email, answer.office)
    console.log(newManager)
    // console.log(newManager.getRole())
    arrOfEmp.push(newManager);
    console.log(newManager);
    //call the main menu function
    // menu()
  })
}
addManager(); //calls the addmanager function to start the prompts

// new menu function with prompts for add engineer, or intern, 
//or finish building team//
// const newMenu() {
// }

//add engineer info
addEngineer = () => {
return inquirer.prompt ([
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
]).then(answer => {
  // console.log(answer)
  //do something with information about manager
  const newEngineer =  new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
  console.log(newEngineer)
  arrOfEmp.push(newEngineer);
  console.log(newEngineer);
  menu();
})
}


//genereate intern function prompts
function addIntern(){
  inwuirer.prompt([
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
  ]).then(answer => {
    // console.log(answer)
    //do something with information about manager
    const newIntern =  new Intern(answer.internName, answer.internId, answer.internEmail, answer.internGithub)
    console.log(newIntern)
    arrOfEmp.push(newIntern);
    console.log(newIntern);
    menu();
  })
  }
}

    console.log(answers)
    const htmlPageContent = generateHTML(answers);
fs.writeFile('index.html', htmlPageContent, (err) =>
err ? console.log(err) : console.log('Successfully created html file')
);
});

    // if(answers.choice == "Engineer"){
      
    //   }

        
    //   }
    
    //   //run engineer function
    // } else{
      //run HTML create function
      //using that array
      fs.writeFileSync('./dist/index.html', generateHTML(arrOfEmp))
    }
  // })
// }

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     );
//   });




// create writeFile function using promises instead of a callback function


// const promptUser = () => {
  // return inquirer.prompt([

function generateHTML (arr)  {

console.log(arr[0].getRole())

 return `<!DOCTYPE html>
  <html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
 <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1 class="display-4">${arr[0].name},</h1>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${arr[0].email}</li>
      <li class="list-group-item">LinkedIn: ${arr[0].id}</li>
      </ul>
      </div>
      </div>
      </body>
      </html>`;
      
    }
 
