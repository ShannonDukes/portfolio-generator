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
const inquirer = require('inquirer');
//const promptProject = portfolioData.projects = [];
// If there's no 'projects' array property, create one
.then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
console.log(`
  =================
  Add a New Project
  =================
  `);
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
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
]);
};
// promptUser().then(answers => console.log(answers));

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

//promptUser()
    // .then(answers => console.log(answers))
    // .then(promptProject)
    // .then(projectAnswers => console.log(projectAnswers));

  // node app.js 'Shannon Dukes' 'Web Developer' into command line