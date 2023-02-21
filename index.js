// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  { type: 'input', 
    name: 'description', 
    message: 'Please provide a description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
  },
  {
  type: 'input',
  name: 'contributing',
  message: 'What are the steps required to contribute to your project?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?',
},
{
  type: 'input',
  name: 'github',
  message: 'What is your GitHub username?',
}

];

// Variables containing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// Variables to connect modules to application

//Allows for use of async await
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);

    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// function call to initialize program
init();
