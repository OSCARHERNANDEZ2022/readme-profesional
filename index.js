// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "A description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What is the instalation process?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What licenses are required",
        name: "licenses",
        choices: ['Apache_License_2.0','BSD_3','GPL', 'MIT', 'Mozilla_Public_License_2.0', 'None']
    },

    {
        type: "input",
        message: "Who are the contributors to this project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test process",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {
        console.log("Making readMe");
        writeToFile("ReadMe.md", generateMarkdown(inquirerResponse)) ;
    })
    .catch((err) => {
        console.log(err);
    }) 
}

// Function call to initialize app
init();

// const userName = questions.userName

// axios.get('https://github.com/OSCARHERNANDEZ2022/portfolio-generator/${userName}')
// .then(questions => {
//     console.log(questions.data);
// });


