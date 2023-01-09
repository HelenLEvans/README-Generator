// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// Variables containing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// Variables to connect modules to application
const generateMarkdown = require("./js/gen");
const licenseBadge = require("./js/lic").licenseBadge;
const questions = require("./js/quest").questions;
//Allows for use of async await
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// function call to initialize program
init();
