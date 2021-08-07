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

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//const printProfileData = (profileDataArr) => {
//    console.log(profileDataArr);
//  };



// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
//    for (let i = 0; i < profileDataArr.length; i++) {
//      console.log(profileDataArr[i]);
//    }
//  };

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    //    profileDataArr.forEach((profileItem) => {
    //      console.log(profileItem)
    //    });
    //  };

profileDataArr.forEach(profileItem => console.log(profileItem));


printProfileData(profileDataArgs);
// node app.js 'Shannon Dukes' 'Web Developer' into command line
