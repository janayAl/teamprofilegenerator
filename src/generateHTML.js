const fs = require('fs')

//write cards for each employee template. Use the js files in lib 

function generateManager(manager) {
    return `<div class="card" style="width: 15rem;">
    <dvi class="card-background">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle">${manager.getRole()}</h6>
    <p class="card-subtitle">${manager.id}</p>
    <p class="card-text"> Office Number: ${manager.officeNumber}
    <p class="card-text"> Email: <a href="maileto:${manager.email}">${manager.email}</a></p>
    </div>
    </div>`;
}

function generateIntern(intern) {
    return `<div class="card" style="width: 15rem;">
    <div class="card-background">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle">${intern.getRole()}</h6>
    <p class="card-subtitle">${intern.id}</p>
    <p class="card-text"> School: ${intern.school}</p>
    <p class="card-text"> Email: <a href="maileto:${intern.email}">${intern.email}</a></p>
    </div>
    </div>`;
}

function generatEngineer(engineer) {
    return `<div class="card" style="width: 15rem;">
    <div class="card-background">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle">${engineer.getRole()}</h6>
    <p class="card-subtitle">${engineer.id}</p>
    <p class="card-text"> Github: <a href="maileto:${engineer.Github}">${engineer.Github}</a></p>
    <p class="card-text"> Email: <a href="maileto:${engineer.email}">${engineer.email}</a></p>
    </div>
    </div>`;
}


//switch case to generate html based on user selections

function displayEmployee(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return generateManager(employee);
            break;
        case "Intern":
            return generateIntern(employee);
            break;
        case "Engineer":
            return generatEngineer(employee);
            break;

    }
}


function generateHTML(card) {

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
                ${card}
          </div>
          </div>
          </body>
          </html>`;

}

function displayTeam(entireArr) {
    console.log(entireArr)
    let card = ""
    entireArr.forEach((employee) => {
        card += displayEmployee(employee); //displayemployee is from switch cases, takes this ino and makes it a variable

    });

    fs.writeFileSync('./output/index.html', generateHTML(card))



    // return arrPage;
}



module.exports = displayTeam;