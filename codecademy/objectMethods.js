const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object methods of accessing keys
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Object methods of accessing entries
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Adding Additional properties
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);
