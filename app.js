const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const gatherTeamInfo = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "userid",
        message: "Please enter your id:"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "checkbox",
        name: "empType",
        message: "What is ypur role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Employee"
        ]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub UserName: (for engineers only)"
    },
    {
        type: "input",
        name: "school",
        message: "What is your school's name: (for interns only)"
    },
    {

        type: "input",
        name: "officeNum",
        message: "What is your office number:"

    }

];
// function to log information based on each type
function writeToFile(fileName, data) {

    //do something
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
           return console.log(err);
        }
  
        console.log(`Sucess with ${data.name}`);
    });
}

inquirer.prompt(gatherTeamInfo)
.then(function(data){

    // if engineer, intern or engineer
    var filename =`./output/${data.name}.txt`;
    console.log(filename);
    //"Manager","Engineer","Intern","Employee"
    if (data.empType === "Engineer") {
        // engineer info
       const text = `
        ${date.name}
        ${data.id}
        `;
        writeFile(filename, text);

    }

});
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

const init = () => {};

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
