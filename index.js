const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


var sortedRobots = robots.map(function (robot) {
  if (knownDecepticons.includes(robot.name)){
    var alli = "decepticon";
  }else{
    var alli = "autobot";
  }
  return Object.assign({}, robot, {
    name: robot.name,
    alliance: alli,
  });
});

var coloredZebraStripes = zebraStripes.map( function(zebra,index){
  if (index % 2 === 0 || index === 0){
    var col = "white"
  }else {
    var col = "black"
  }
  return Object.assign({},zebra,{
    width: zebra.width,
    color: col,
  })
  })
