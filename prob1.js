const inquirer = require('inquirer');

module.exports = {
    run: () => {
        console.log(`Shortest path problem`);
        inquirer.prompt([
            {
                type: "list",
                name: "pointA",
                message: "Select point A.",
                choices: ["Tuguegarao", "Iguig", "Amulung", "Aparri", "Penablanca", "Enrile", "Piat"]
            },
            {
                type: "list",
                name: "pointB",
                message: "Select point B.",
                choices: ["Tuguegarao", "Iguig", "Amulung", "Aparri", "Penablanca", "Enrile", "Piat"]
            }
        ]).then((answers) => {
            const points = answers;
            calculate(points.pointA, points.pointB);
        });
    }
}

const routes = [
    {
        from: "Tuguegarao",
        to: "Iguig",
        distance: 24
    },
    {
        from: "Tuguegarao",
        to: "Amulung",
        distance: 71
    },
    {
        from: "Iguig",
        to: "Aparri",
        distance: 103
    },
    {
        from: "Iguig",
        to: "Penablanca",
        distance: 59
    },
    {
        from: "Enrile",
        to: "Piat",
        distance: 141
    },
    {
        from: "Enrile",
        to: "Penablanca",
        distance: 65
    },
    {
        from: "Enrile",
        to: "Amulung",
        distance: 101
    },
    {
        from: "Piat",
        to: "Amulung",
        distance: 169
    },
    {
        from: "Amulung",
        to: "Penablanca",
        distance: 134
    }
];

let foundRoutes = [];
let unoptimizedRoutes = [];
let optimizedRoutes = [];
let start;
let finish;

function calculate(a, b) {
    // const routes = this.routes;
    console.table(routes);

    start = a;
    finish = b;
    console.log(`Calculating route from ${start} to ${finish}...`);

    getUnoptimizedRoute(start);
}

function getUnoptimizedRoute(a, iteration = 0) {
    console.log(`Iteration ${iteration}...`);

    let foundRoute = [];
    
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];

        console.log(`Checking ${route.from} - ${route.to}...`);
        if(route.from == a || route.to == a) {
            foundRoute.push(route);
        }

        if((route.from == start || route.to == start) && (route.from == finish || route.to == finish)) {
            console.log(`Direct route found!`);
            optimizedRoutes.push(route);
            finalize();
        }
    }

    foundRoute.sort((a, b) => {
        return a.distance - b.distance;
    });

    foundRoutes.push(foundRoute);

    unoptimizedRoutes.push(foundRoutes);

    console.log(`Route so far...`);
    console.dir(unoptimizedRoutes, {depth: null});

    
}

function finalize() {
    console.log(`Computed route`);
    console.dir(optimizedRoutes);
    process.exit(1);
}