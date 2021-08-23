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

inquirer  
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      
    },
    {
      type: 'input',
      message: 'What is your employee ID',
      name: 'id',
      
    },
    {
      type: 'input',
      message: 'What is your office number',
      name: 'office',
      
    },
    // {
    //   type: 'list',
    //   message: 'What is your role?',
    //   name: 'contact',
    //   choices: ['Manager', 'Engineer', 'Intern'],
    // },
    // {
    //   type: 'input',
    //   name: 'Github',
    //   message: 'What is your Github username?',
    // },
    // {
    //   type: 'input',
    //   name: 'school',
    //   message: 'What is your School?',
    // },
  ]).then(answer => {
    // console.log(answer)
    //do something with information about manager
    const newManager =  new Manager(answer.name, answer.id, answer.email, answer.office)
    console.log(newManager)
    console.log(newManager.getRole())
    arrOfEmp.push(newManager)
    //call the main menu function
    menu()
  })

function menu() {
  inquirer.prompt([
    {
      message: "would you like to add more employees?",
      name: "choice",
      type: "list",
      choices: ["Engineer", "Intern", "I'm done"]
    }
  ]).then(answers => {
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
 
