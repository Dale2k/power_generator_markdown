// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter a Title for your project.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a Description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter Installation instructions for your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Usage information for your project.",
    name: "usage",
  },
  {
    type: "checkbox",
    name: "license",
    choices: ["MIT", "ISC", "Apache License 2.0"],
  },
  {
    type: "input",
    message: "Enter Contributing guidelines for your project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter Test instruction for your Project.",
    name: "test",
  },
  {
    type: "input",
    message: "provide your GitHub Username.",
    name: "username",
  },
  {
    type: "input",
    message: "provide your Email",
    name: "email",
  },
];

// TODO: Create a function to write README file
let fileName = "sampleReadme.md";
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Completed");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile(fileName, generateMarkdown(response)));
}

// Function call to initialize app
init();
