const inquirer = require("inquirer");

// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project here:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions here:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information here:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines here:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions here:',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
