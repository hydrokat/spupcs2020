const inquirer = require('inquirer');

module.exports = {
    run: () => {
        inquirer.prompt([
            {
                name: "seconds",
                message: "How many seconds to convert?"
            }
        ]).then((answers) => {
            const seconds = answers.seconds;
            
            let hms = calculate(seconds);
        });
    }
}

function calculate(seconds) {
    seconds = parseInt(seconds, 10);

    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = seconds - (hours * 3600) - (minutes * 60);

    const time = hours.toString().padStart(2, 0) + ":" + minutes.toString().padStart(2, 0) + ":" + seconds.toString().padStart(2, 0);

    console.log(`${seconds} converted to ${time}`);
    
    return time;
}