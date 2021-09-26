//write cards for each employee template. Use the js files in lib 

function generateManager(manager) {
    return `<div class="card" style='width: 15rem;">
    <dvi class="card-background">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle">${manager.role}</h6>
    <p class="card-subtitle">${manager.id}</p>
    <p class="card-text"> Office Number: ${manager.officeNumbr}
    <p class="card-text"> Email: <a href="maileto:${manager.email}">${manager.email}</a></p>
    </div>
    </div>`;
}

function generateIntern(intern) {
    return `<div class="card" style='width: 15rem;">
    <dvi class="card-background">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle">${intern.role}</h6>
    <p class="card-subtitle">${intern.id}</p>
    <p class="card-text"> School: ${intern.School}
    <p class="card-text"> Email: <a href="maileto:${intern.email}">${intern.email}</a></p>
    </div>
    </div>`;
}

function generatEngineer(engineer) {
    return `<div class="card" style='width: 15rem;">
    <dvi class="card-background">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle">${engineer.role}</h6>
    <p class="card-subtitle">${engineer.id}</p>
    <p class="card-text"> School: ${engineer.School}
    <p class="card-text"> Email: <a href="maileto:${engineer.GitHub}">${engineer.GitHub}</a></p>
    <p class="card-text"> Email: <a href="maileto:${engineer.email}">${engineer.email}</a></p>
    </div>
    </div>`;
}


//switch case to generate html based on user selections

function displayEmployee(employee) {
    switch (employee.role) {
        case "Manager":
            return generateManager(employee);
            break;
        case "Intern":
            return generateIntern(empoyee);
            break;
        case "Engineer":
            return generatEngineer(employee);
            break;

    }
}


function generateHTML(arr) {

    return `<!DOCTYPE html>
      <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Tean Profile</title>
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

function displayTeam(entireArr) {
    let arr = []; //creating an empty array for info to pass through
    entireArr.forEach((employee) => {
        let page = displayEmployee(employee); //displayemployee is from switch cases, takes this ino and makes it a variable
        arr.push(page); //pushes everything from the team into the emptry array 
    });

    let arrPage = generateHTML(arr);
    return arrPage;
}


//export generateHTML or displayTeam? 
module.exports = displayTeam;