const inquirer = require('inquirer');

module.exports = {
    run: () => {
        console.log(`Merging at the race`);
        console.log(`Note: Only first five numbers are included. Use comma-separated values. No spaces.`);
        
        inquirer.prompt([
            {
                name: "garage1",
                message: "Input numbers in garage 1. (comma-separated value)"
            },
            {
                name: "garage2",
                message: "Input numbers in garage 2. (comma-separated value)"
            }
        ]).then((answers) => {
            const garages = answers;
            calculate(garages.garage1, garages.garage2);
        });
    }
}

function calculate(a, b) {
    a = a.split(",");
    b = b.split(",");
    console.log(`Garage 1: ${a}`);
    console.log(`Garage 2: ${b}`);

    let merged = [...a, ...b];
    console.log(`Unsorted starting line: ${merged}`);
    
    merged = merged.sort();

    console.log(`Starting line: ${merged}`);

    return merged;
}