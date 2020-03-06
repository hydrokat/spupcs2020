const inquirer = require('inquirer');

module.exports = {
    run: () => {
        inquirer.prompt([
            {
                name: "pancakeNum",
                message: "Input numbers of pancake. (comma-separated value. No spaces.)"
            }
        ]).then((answers) => {
            const pancakes = answers.pancakeNum;
            calculate(pancakes);
        });
    }
}

function calculate(pancakes) {
    let pancakesObj = [];
    let highestValue = 0;
    let highestEaters = [];
    pancakes = pancakes.split(",");

    pancakes.forEach((p, i) => {
        pancakesObj.push({
            ["Person"]: i + 1,
            value: parseInt(p)
        })
    });

    pancakesObj = pancakesObj.sort((a, b) => {
        return b.value - a.value;
    });

    highestValue = pancakesObj[0].value;

    pancakesObj.forEach(e => {
        if(e.value == highestValue) highestEaters.push(e);
    });

    console.log(`Pancake Eaters`);
    console.table(pancakesObj);
    console.log(`Highest Eaters`);
    console.table(highestEaters);

    let finalText = ``
    highestEaters.forEach((he, i) => {
        finalText += `Person #${he.Person}, `;
    });
    finalText += `ate the most pancakes at ${highestEaters[0].value}`;

    console.log(finalText);
    
}