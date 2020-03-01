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

// gather information about the development team members,
// and create objects for each team member (using the correct classes as blueprints!)


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

// code to ask different questions via inquirer depending on
// employee type.
// we initialise with a manager who has the responsibility to build his team

const init = () => {
    console.log("Build your engineering team:");
    inquirer.prompt(managerQuestions).then(function (response) {
        // make a new Manager object
        //console.log(response);


        const newManager = new Manager(response.name, response.userid, response.email, response.officeNum);
        
        // add the information collected about the new manager to the employeeList
        employeeList.push(newManager);

        //console.log(employeeList);
        // prompts for more employees input

        askNewEmp();
    })
};
// collects user's input to create an engineer
function askEngineer() {

    inquirer.prompt(engineerQuestions).then(function (response) {
        //make engineer object...
        //console.log(response);

        const newEngineer = new Engineer(response.name, response.userid, response.email, response.githubRepo);
        employeeList.push(newEngineer);

        askNewEmp();
        //console.log(employeeList);
    })
}
//collect user's input to create an intern
function askIntern() {

    inquirer.prompt(internQuestions).then(function (response) {
        //make engineer object...
        console.log(response);

        const newIntern = new Intern(response.name, response.userid, response.email, response.school);
        employeeList.push(newIntern);

        console.log(employeeList);
        askNewEmp();

    })
}

// gives option for the user to add more employee
//and generates the desired employee type

function askNewEmp() {

    inquirer.prompt(
        {
            type: "list",
            name: "newEmp",
            message: "Do you want to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore"
            ]
        }
    ).then(function (data) {
        if (data.newEmp === "Engineer") {
            askEngineer();
        }
        else if (data.newEmp === "Intern") {
            askIntern();
        }
        else {
            stopEmployeeInput();
        }
    })
}

// generates employees html file in output directory 
//using the render function in htmlRenderer
function stopEmployeeInput() {

    if (!fs.existsSync(OUTPUT_DIR)) {

        fs.mkdirSync(OUTPUT_DIR);

    }
    fs.writeFileSync(outputPath,render(employeeList));
    console.log("Your team is generated!")
}


init();
