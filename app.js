// console.log('Hello Node!');
// node app.js into command line

// console.log(document);
// node app.js into command line

// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);
// node app.js into command line

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// node app.js into command line
// node app.js 'Hello Node' From the command line

// var profileDataArgs = process.argv.slice(2, process.argv.length - 1);
// console.log(profileDataArgs);
// node app.js 'Shannon Dukes' 'Web Developer' into command line

//const printProfileData = (profileDataArr) => {
//    console.log(profileDataArr);
//  };



// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
//    for (let i = 0; i < profileDataArr.length; i++) {
//      console.log(profileDataArr[i]);
//    }
//  };

// const printProfileData = profileDataArr => {
// This...
//    for (let i = 0; i < profileDataArr.length; i += 1) {
//      console.log(profileDataArr[i]);
//    }

//    console.log('================');

// Is the same as this...
//    profileDataArr.forEach(profileItem => console.log(profileItem));
//  };

// Is the same as this...
//    profileDataArr.forEach((profileItem) => {
//      console.log(profileItem)
//    });
//  };


// printProfileData(profileDataArgs);
// node app.js 'Shannon Dukes' 'Web Developer' into command line

//const generatePage = (userName, githubName) => {
//    return `
//      Name: ${userName}
//      GitHub: ${githubName}
//   `;
//};

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


// const fs = require('fs');
// const generatePage = require('./src/page-template');

// console.log(inquirer)

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username'
//       },
//       {
//         type: 'input',
//         name: 'about',
//         message: 'Provide some information about yourself:'
//       }
//     ]);
//   };
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });

//promptUser()
    // .then(answers => console.log(answers))
    // .then(promptProject)
    // .then(projectAnswers => console.log(projectAnswers));

  // node app.js 'Shannon Dukes' 'Web Developer' into command line