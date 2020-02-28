const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const employeeList = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "userid",
        message: "Please enter the manager's id:"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
    },
    {

        type: "input",
        name: "officeNum",
        message: "What is the manager's office number:"

    }

];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineers's name?"
    },
    {
        type: "input",
        name: "userid",
        message: "Please enter the engineers's id:"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineers's email address?"
    },
    {

        type: "input",
        name: "githubRepo",
        message: "What is the engineers's GitHub username?"

    }

];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "userid",
        message: "Please enter  the intern's id:"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {

        type: "input",
        name: "school",
        message: "What is  the intern's school's name?"

    }

];


// function to log information based on each type



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

const init = () => {
    console.log("Please build your team");
    inquirer.prompt(managerQuestions).then(function (response) {
        // make a new Manager object
        console.log(response);
        askUserType();
    })
};

function askEngineer(){

    inquirer.prompt(engineerQuestions).then(function(response){
        //make engineer object...
        console.log(response);
        askUserType();

    })
}

function askIntern(){

    inquirer.prompt(internQuestions).then(function(response){
        //make engineer object...
        console.log(response);
        askUserType();

    })
}

function askUserType() {

    inquirer.prompt(
        {
            type: "list",
            name: "userType",
            message: "Do you want to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore"
            ]
        }
    ).then(function (data) {
        if (data.userType === "Engineer") {
            askEngineer();
        }
        else if (data.userType === "Intern") {
            askIntern();
        }
        else {
            // make html
            //render(employeeList);

            
        }
    })
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...

init();
