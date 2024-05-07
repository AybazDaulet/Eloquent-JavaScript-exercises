function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0, total2 = 0;
  for (let i = 0; i < 100; i++) {
    let randomState = VillageState.random();
    total1 += runRobot(randomState, robot1, memory1);
    total2 += runRobot(randomState, robot2, memory2);
  }
  console.log(`An average number of steps the first robot takes is ${total1 / 100} \nAn average number of steps the second robot takes is ${total2 / 100}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);