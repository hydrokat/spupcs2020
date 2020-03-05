const inquirer = require('inquirer');
const prob1 = require('./prob1')
const prob2 = require('./prob2')
const prob3 = require('./prob3')
const prob4 = require('./prob4')
const prob5 = require('./prob5')

function ask() {
    inquirer.prompt([
        {
            type: "list",
            name: "selectedProblem",
            message: "Select a problem.",
            choices: ["Problem #1", "Problem #2", "Problem #3", "Problem #4", "Problem #5"]
        }
    ]).then((answers) => {
        const problem = answers.selectedProblem
        console.info(`You selected ${problem}`);
        run(problem);
    });
}

function run(problem = "Problem #1") {
    console.log(`Running ${problem}`);
    
    switch (problem) {
        case "Problem #1":
            prob1.run();
            break;
        case "Problem #2":
            prob2.run();
            break;
        case "Problem #3":
            prob3.run();
            break;
        case "Problem #4":
            prob4.run();
            break;
        case "Problem #5":
            prob5.run();
            break;
    
        default:
            break;
    }

    // ask();
}

ask();