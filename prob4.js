const inquirer = require('inquirer');

module.exports = {
    run: () => {
        inquirer.prompt([
            {
                name: "year",
                message: "Enter year."
            }
        ]).then((answers) => {
            const year = answers.year;
            
            calculate(year);            
        });
    }
}

function calculate(year) {
    let leapYears = [];
    year = parseInt(year);

    if(isLeapYear(year)) {
        for (let index = 0; index <= 5; index++) {
            let nextYear = year;
            nextYear = year + ((index + 1) * 4);

            leapYears.push(nextYear);
        }

        console.log(`${year} is a leap year.`);
        console.log(`Next 5 leap years: ${leapYears}`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

function isLeapYear(year) {
    let isLeapYear = false;
    
    if(year % 4 == 0) {
        isLeapYear = true;
        if(year % 100 == 0) {
            isLeapYear = false;
            if(year % 400 == 0) {
                isLeapYear = true;
            }
        }
    }

    return isLeapYear;
}