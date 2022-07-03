// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')

// 1. TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:"What's the title of your project?"
    },
    {
        type:'input',
        name:'description',
        message:'Describe your project'
    },
    {
        type:'input',
        name:'installation',
        message:'Provide installaion instruction to use your app'
    },
    {
        type:'input',
        name:'usage',
        message:'How do you use it?'
    } ,
    {
        type:'input',
        name:'contributing',
        message:'What is the contribution guideline?'
    },
    {
        type:'input',
        name:'tests',
        message:'What test information does the use need to know?'
    },
    {
        type:'list',
        name:'lisence',
        message:'What lisence do you want to use?',
        choices: ["MIT","Apache","BSD","GNU"]
    },
    {
        type:'input',
        name:'email',
        message:'What tis your email address?'
    },
    {
        type:'input',
        name:'github',
        message:'What is your GitHub user name?'
    }
];

// 8. TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// 2. TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

// 3. Function call to initialize app
init();
