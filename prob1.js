const inquirer = require('inquirer');

module.exports = {
    run: () => {
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
            dijkstra(graph, points.pointA, points.pointB);
        });
    }
}

const graph = {
    'Tuguegarao':{'Iguig':24, 'Amulung':71},
    'Iguig':{'Aparri':103, 'Penablanca':59, 'Tuguegarao':24},
    'Amulung':{'Penablanca':134, 'Tuguegarao': 71, 'Enrile':101},
    'Penablanca':{'Iguig':59, 'Amulung':134, 'Enrile':65},
    'Aparri':{'Iguig':103},
    'Enrile':{'Piat':141, 'Penablanca':65, 'Amulung':101},
    'Piat':{'Amulung':169, 'Enrile':141}
    };

function dijkstra(graph, start, end) {
    shortest_distance = {};
    track_predecessor = {};
    unvisitedNodes = graph;
    INFINITY = 999999;
    track_path = []

    for(var node in unvisitedNodes) {
        shortest_distance[node] = INFINITY;
    };

    shortest_distance[start] = 0;

    while(Object.keys(unvisitedNodes).length > 0) {
        min_distance_node = null;

        for(var node in unvisitedNodes) {
            if(min_distance_node === null) {
                min_distance_node = node;
            }
            else if(shortest_distance[node] < shortest_distance[min_distance_node]) {
                min_distance_node = node;
            }
        };

        path_options = graph[min_distance_node];

        for(var child_node in path_options) {
            if(path_options[child_node] + shortest_distance[min_distance_node] < shortest_distance[child_node]) {
                shortest_distance[child_node] = path_options[child_node] + shortest_distance[min_distance_node];
                track_predecessor[child_node] = min_distance_node;
            }
        };

        delete unvisitedNodes[min_distance_node];
    }

    currentNode = end;
        
    while(currentNode !== start) {
        track_path.push(currentNode);
        currentNode = track_predecessor[currentNode];
        
    }

    track_path.push(start);

    if(shortest_distance[end] != INFINITY) {
        console.log('Shortest routing and distance: ');
        var track_path = track_path.reverse().toString().replace(/,/g, '-');
        console.log(track_path + ' ' + shortest_distance[end] + ' miles');
    }
}