// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-readme');
const generateReadme = require('./src/readme-template');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required):',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please enter a title!");
                  return false;
              }
          }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter a description of your project?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for how to install your project:',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter usage instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions:',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            choices: ['GPL', 'MIT', 'BSD', 'APACHE'],
            validate: licensesInput => {
                if (licensesInput) {
                    return true;
                } else {
                    console.log("Please select your project's license(s)!");
                    return false;
                }

            }
        },
        {
            type: 'confirm',
            name: 'confirmcontributing',
            message: 'Did you want to contribution guidelines?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to add testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please enter testing instructions:',
            when: ({ confirmTesting }) => {
                if (confirmTesting) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'enter your GitHub (Required):',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required):',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Lastly, please enter your name, and we should be good to go!");
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter your name here please");
                    return false;
                }
            }
        },
    ]);

};

promptUser()
    .then( readMeData => {
        return generateReadme(readMeData);
    })
    .then( readMeMarkdown => {
        return writeFile(readMeMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
