// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default: 'example@dev.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid Email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid Project Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a short description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "What type of license should your project have? (Use Arrow Keys)",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "What command should be run to install the dependencies?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What command should be run to run tests?",
        name: 'testing'
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing'
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Generating Readme")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();