// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ["None", "MIT", "Apache", "GPL", "BSD"];
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description about your project:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a description about your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Enter the installation instructions:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter steps required to install your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter some information about how to use this project:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a usage description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Enter the contribution: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter the command to run tests:',
    default: 'npm test'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter project license:',
    choices: licenses
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Github username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },

];

// Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, function (err) {
    err ? console.log(err) : console.log("README file successfully created")
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
