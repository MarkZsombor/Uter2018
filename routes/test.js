var PF = require('pathfinding');

var gameState = {
	"width": 10,
	"height": 17,
	"id": 7318,
	"turn": 7,
	"snakes": {
		"data": [
			{
				"id": "1e93d59c-1a83-487f-ac9d-0a7ca278ca9e",
				"health": 97,
				"length": 5,
				"taunt": "\"up\"",
				"name": "TR_Tester",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 1,
							"y": 2
						},
						{
							"object": "point",
							"x": 1,
							"y": 3
						},
						{
							"object": "point",
							"x": 2,
							"y": 3
						},
						{
							"object": "point",
							"x": 3,
							"y": 3
						},
						{
							"object": "point",
							"x": 4,
							"y": 3
						}
					],
					"object": "list"
				}
			},
			{
				"id": "7c855e7a-9b60-46dc-8b30-381ecf26afba",
				"health": 100,
				"length": 5,
				"taunt": "\"Moving left, targeting Food\"",
				"name": "Slashterix",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 6
						},
						{
							"object": "point",
							"x": 4,
							"y": 6
						},
						{
							"object": "point",
							"x": 5,
							"y": 6
						},
						{
							"object": "point",
							"x": 5,
							"y": 7
						},
						{
							"object": "point",
							"x": 5,
							"y": 7
						}
					],
					"object": "list"
				}
			},
			{
				"id": "a3a3d33c-3d4d-4424-847d-cab2a60f37d7",
				"health": 99,
				"length": 4,
				"taunt": "\"The body of mind slips on a banana peel.\"",
				"name": "dsnek",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 0,
							"y": 5
						},
						{
							"object": "point",
							"x": 0,
							"y": 4
						},
						{
							"object": "point",
							"x": 1,
							"y": 4
						},
						{
							"object": "point",
							"x": 2,
							"y": 4
						}
					],
					"object": "list"
				}
			},
			{
				"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
				"health": 98,
				"length": 5,
				"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
				"name": "Uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 4,
							"y": 7
						},
						{
							"object": "point",
							"x": 4,
							"y": 8
						},
						{
							"object": "point",
							"x": 4,
							"y": 9
						},
						{
							"object": "point",
							"x": 4,
							"y": 10
						},
						{
							"object": "point",
							"x": 5,
							"y": 10
						}
					],
					"object": "list"
				}
			},
			{
				"id": "c5a3b4c8-9dbf-43f4-8605-600c9c18739e",
				"health": 93,
				"length": 3,
				"taunt": "\"battlesnake-python!\"",
				"name": "Suicide",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 1,
							"y": 8
						},
						{
							"object": "point",
							"x": 0,
							"y": 8
						},
						{
							"object": "point",
							"x": 0,
							"y": 9
						}
					],
					"object": "list"
				}
			}
		],
		"object": "list"
	},
	"food": {
		"data": [
			{
				"object": "point",
				"x": 1,
				"y": 16
			},
			{
				"object": "point",
				"x": 2,
				"y": 13
			},
			{
				"object": "point",
				"x": 9,
				"y": 12
			},
			{
				"object": "point",
				"x": 3,
				"y": 13
			},
			{
				"object": "point",
				"x": 0,
				"y": 1
			},
			{
				"object": "point",
				"x": 3,
				"y": 14
			},
			{
				"object": "point",
				"x": 8,
				"y": 16
			},
			{
				"object": "point",
				"x": 7,
				"y": 6
			},
			{
				"object": "point",
				"x": 2,
				"y": 15
			},
			{
				"object": "point",
				"x": 9,
				"y": 16
			},
			{
				"object": "point",
				"x": 9,
				"y": 0
			},
			{
				"object": "point",
				"x": 4,
				"y": 0
			},
			{
				"object": "point",
				"x": 8,
				"y": 15
			},
			{
				"object": "point",
				"x": 1,
				"y": 11
			}
		],
		"object": "list"
	},
	"object": "world",
	"dead_snakes": {
		"data": [],
		"object": "list"
	},
	"you": {
		"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
		"health": 98,
		"length": 5,
		"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
		"name": "Uter",
		"object": "snake",
		"body": {
			"data": [
				{
					"object": "point",
					"x": 4,
					"y": 7
				},
				{
					"object": "point",
					"x": 4,
					"y": 8
				},
				{
					"object": "point",
					"x": 4,
					"y": 9
				},
				{
					"object": "point",
					"x": 4,
					"y": 10
				},
				{
					"object": "point",
					"x": 5,
					"y": 10
				}
			],
			"object": "list"
		}
	}
}

const taunts = [
	"Don't make me run, I'm full of Chocolate!",
	"I don't deserve this!",
	"Oh guten tag.",
	"I also have a bag of marzipan JoyJoys!",
	"Would you like a lick of my flavor wax?",
	"I begged you to look at mine first!"
];

function getTaunt() {
  var tauntIndex = 0;
	if (gameState.you.health > 90){
    tauntIndex = 0;
	} else if (gameState.you.health < 30) {
    tauntIndex = 5;
	} else if (gameState.turn < 50) {
    tauntIndex = 4;
	} else if (gameState.turn < 100) {
    tauntIndex = 2;
	} else {
    tauntIndex = 3;
	}
	return taunts[tauntIndex];
}

const myHead = {
	x: gameState.you.body.data[0].x,
	y: gameState.you.body.data[0].y
}

//Determines the distance from the snakes head to something
const getDistance = (a, b) => (Math.abs(a - myHead.x) + Math.abs(b - myHead.y));

const grid = new PF.Grid(gameState.width, gameState.height);

function setGrid() {
	//Mark my snake in grid
	for (var i = 1; i < gameState.you.body.data.length - 1; i++) {
		grid.setWalkableAt(gameState.you.body.data[i].x, gameState.you.body.data[i].y, false);
	}
	//Mark other snake heads
	const allSnakes = gameState.snakes.data
	for (var snake in allSnakes) {
		if (allSnakes[snake].id !== gameState.you.id) {
			//Don't run into body
			var snakeIndex = allSnakes[snake].body.data.length - 2;
			if (allSnakes[snake].body.data[snakeIndex+1].x == allSnakes[snake].body.data[snakeIndex].x && allSnakes[snake].body.data[snakeIndex+1].y == allSnakes[snake].body.data[snakeIndex].y){
				snakeIndex++
			}
			for (var j = 0; j < snakeIndex; j++) {
				grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
			}
			//Could we run into the head this turn
			if (getDistance(allSnakes[snake].body.data[0].x, allSnakes[snake].body.data[0].y) === 2) {

				//Decide on head collision depending on size    
				if (gameState.you.length <= allSnakes[snake].length) {
					console.log('you ', gameState.you.length, allSnakes[snake].name, allSnakes[snake].length )
					//Pathfinding will throw an error if we try to set a space outside the board
					if (allSnakes[snake].body.data[0].x + 1 < gameState.width) {
						grid.setWalkableAt((allSnakes[snake].body.data[0].x + 1), allSnakes[snake].body.data[0].y, false);
					}
					if (allSnakes[snake].body.data[0].x - 1 >= 0) {
						grid.setWalkableAt((allSnakes[snake].body.data[0].x - 1), allSnakes[snake].body.data[0].y, false);
					}
					if (allSnakes[snake].body.data[0].y + 1 < gameState.height) {
						grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y + 1), false);
					}
					if (allSnakes[snake].body.data[0].y - 1 >= 0) {
						grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y - 1), false);
					}
				}
			}
		}
	}
}

function findTarget() {
	// console.log(gameState.food.data);
	var allTargets = [];
	for (var i in gameState.food.data) {
		var distance = getDistance(gameState.food.data[i].x, gameState.food.data[i].y);
		if (!gameState.food.data[i].x || !gameState.food.data[i].y || gameState.food.data[i].x === gameState.width - 1 || gameState.food.data[i].y === gameState.height - 1) {
			distance += 10
		}
		// if (grid.nodes[gameState.food.data[i].x][gameState.food.data[i].y]) {
		//   if (!grid.nodes[gameState.food.data[i].x][gameState.food.data[i].y].walkable) {
		//     distance += 100
		//   }
		// }
		allTargets.push({
			x: gameState.food.data[i].x,
			y: gameState.food.data[i].y,
			distance: distance
		});

	}
	allTargets.sort(function (a, b) {
		return a.distance - b.distance;
	});
	return allTargets[0];
}

// Finds your own tail and returns its coordinates for targeting.
function findTail() {
	var snakeBody = gameState.you;
	var snakeLength = gameState.you.length;
	var tailPosition = snakeBody.body.data[snakeLength - 1];
	return tailPosition;

}

// Checks current health to switch between tail chasing and food chasing.
function chooseTarget() {

	// If health is over 75 chase tail
	if (gameState.you.health > 50) {

		return findTail();
	} else {
		return findTarget();

	}

}

setGrid();
const closestTarget = findTarget();
console.log('target', closestTarget)
const finder = new PF.AStarFinder;
const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);

// var path = [];
// var targetIndex = 0;
// console.log(closestTargets.length)
// while(!path.length && targetIndex < closestTargets.length) {
// 	console.log(targetIndex, closestTargets[targetIndex])
// 	var newPath = finder.findPath(myHead.x, myHead.y, closestTargets[targetIndex].x, closestTargets[targetIndex].y, grid);
// 	console.log(newPath[1]);
// 	path = newPath;
// 	targetIndex ++;
// }
// console.log('target', closestTargets)
console.log('path', path[1]);
const snakeResponse = {};

if (!path.length || (path.length === 2 && !grid.nodes[path[0][1]][path[0][0]].walkable)) {
	// console.log('NO ROUTE')
	var possibleMoves = [
		{
			direction: "right",
			x: myHead.x + 1,
			y: myHead.y,
			valid: true
		},
		{
			direction: "down",
			x: myHead.x,
			y: myHead.y + 1,
			valid: true
		},
		{
			direction: "left",
			x: myHead.x - 1,
			y: myHead.y,
			valid: true
		},
		{
			direction: "up",
			x: myHead.x,
			y: myHead.y - 1,
			valid: true
		},
	];

	// Stop the snake from running into itself
	function checkSelf() {
		for (var i = 0; i < gameState.you.body.data.length; i++) {
			for (var move in possibleMoves) {
				if (possibleMoves[move].x === gameState.you.body.data[i].x && possibleMoves[move].y === gameState.you.body.data[i].y) {
					possibleMoves[move].valid = false;
				}
			}
		}
	}

	//Stop from running into wall
	function checkEdges() {
		for (var move in possibleMoves) {
			// console.log('yup')
			if (possibleMoves[move].x < 0 || possibleMoves[move].x >= gameState.width) {
				possibleMoves[move].valid = false;
			}
			if (possibleMoves[move].y < 0 || possibleMoves[move].y >= gameState.height) {
				possibleMoves[move].valid = false;
			}
		}
	}

	//check for other snakes
	function checkSnakes() {
		var allSnakes = gameState.snakes.data
		for (var snake in allSnakes) {
			if (allSnakes[snake].id !== gameState.you.id) {
				// console.log('Found enemy')
				// console.log(allSnakes[snake]);
				//Don't run into body
				for (var i = 0; i < allSnakes[snake].body.data.length; i++) {
					for (var move in possibleMoves) {
						if (possibleMoves[move].x === allSnakes[snake].body.data[i].x && possibleMoves[move].y === allSnakes[snake].body.data[i].y) {
							possibleMoves[move].valid = false;
						}
					}
				}
				//Decide on head collision depending on size
				if (allSnakes[snake].length >= gameState.you.length) {
					for (var move in possibleMoves) {
						if (possibleMoves[move].x === allSnakes[snake].body.data[0].x + 1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
							possibleMoves[move].valid = false;
						}
						if (possibleMoves[move].x === allSnakes[snake].body.data[0].x - 1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
							possibleMoves[move].valid = false;
						}
						if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y + 1) {
							possibleMoves[move].valid = false;
						}
						if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y - 1) {
							possibleMoves[move].valid = false;
						}
					}
				}
			}
		}
	}

	checkSelf();
	checkEdges();
	checkSnakes();

	var validMoves = [];
	for (var i in possibleMoves) {
		if (possibleMoves[i].valid) {
			validMoves.push(possibleMoves[i]);
		}
	}

	snakeResponse.move = validMoves[0].direction;
	snakeResponse.taunt = taunts[1];
	console.log(snakeResponse);
	// return res.json(snakeResponse);

} else {
	function setMove() {
		if (path[1][0] === myHead.x && path[1][1] === myHead.y + 1) {
			return 'down';
		} else if (path[1][0] === myHead.x && path[1][1] === myHead.y - 1) {
			return 'up';
		} else if (path[1][0] === myHead.x + 1 && path[1][1] === myHead.y) {
			return 'right';
		} else if (path[1][0] === myHead.x - 1 && path[1][1] === myHead.y) {
			return 'left';
		} else {
			return 'up';
		}
	}

	snakeResponse.move = setMove();
	snakeResponse.taunt = getTaunt();
	console.log(snakeResponse);
	// return res.json(snakeResponse);

}