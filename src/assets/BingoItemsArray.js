const bingoItemsArray = [
  {
    id: 1,
    description: "Cub Scouts",
    longDescription: "Cub Scouts",
    icon: "./cub-scouts.svg"
  },
  {
    id: 2,
    description: "bobcat",
    longDescription: "Bobcat",
    icon: "./bobcat.svg"
  },
  {
    id: 3,
    description: "Lion",
    longDescription: "Lion",
    icon: "./lion.svg"
  },
  {
    id: 4,
    description: "Tiger",
    longDescription: "Tiger",
    icon: "./tiger.svg"
  },
  {
    id: 5,
    description: "Wolf",
    longDescription: "Wolf",
    icon: "./wolf.svg"
  },
  {
    id: 6,
    description: "Bear",
    longDescription: "Bear",
    icon: "./bear.svg"
  },
  {
    id: 7,
    description: "Webelos",
    longDescription: "Webelos",
    icon: "./webelos.svg"
  },
  {
    id: 8,
    description: "AOL",
    longDescription: "Arrow of Light",
    icon: "./aol.svg"
  },
  {
    id: 9,
    description: "Whittling",
    longDescription: "Whittling chip",
    icon: "./whittling-chip.svg"
  },
  {
    id: 10,
    description: "Archery",
    longDescription: "Archery",
    icon: "./archery.svg"
  },
  {
    id: 11,
    description: "Firemaking",
    longDescription: "Firemaking",
    icon: "./firemaking.jpeg",
    smallText: true
  },
  {
    id: 12,
    description: "swimming",
    longDescription: "Swimming",
    icon: "./swimming.png"
  },
  {
    id: 13,
    description: "Survival c.",
    longDescription: "Survival Camp",
    icon: "./survival-camp.png"
  },
  {
    id: 14,
    description: "Sq. knot",
    longDescription: "square knot",
    icon: "./square-knot.svg"
  },
  {
    id: 15,
    description: "hiking",
    longDescription: "hiking",
    icon: "./hiking.jpeg",
  },
  {
    id: 16,
    description: "neckerchief",
    longDescription: "neckerchief",
    icon: "./neckerchief.png",
    smallText: true
  },
  {
    id: 17,
    description: "Scout life",
    longDescription: "Scout Life",
    icon: "./scout-life.jpeg"
  },
  {
    id: 18,
    description: "6 essentials",
    longDescription: "Six Essentials",
    icon: "./6-essentials.png",
    smallText: true
  },
  {
    id: 19,
    description: "Handbook",
    longDescription: "Scout handbook",
    icon: "./scout-handbook.jpeg"
  },
  {
    id: 20,
    description: "Bearnival",
    longDescription: "Bearnival",
    icon: "./bearnival.png"
  },
  {
    id: 21,
    description: "Bridging",
    longDescription: "Bridging Ceremony",
    icon: "./bridging.jpeg"
  },
  {
    id: 22,
    description: "Blue & Gold",
    longDescription: "Blue & gold",
    icon: "./B&G.png",
    smallText: true
  },
  {
    id: 23,
    description: "Pack 461",
    longDescription: "Pack 461",
    icon: "./461.png"
  },
  {
    id: 24,
    description: "Scout Sign",
    longDescription: "Scout Sign",
    icon: "./scout-sign.png"
  },
  {
    id: 25,
    description: "Campfire",
    longDescription: "Campfire",
    icon: "./campfire.jpeg"
  },
  {
    id: 26,
    description: "Tents",
    longDescription: "Tents",
    icon: "./tents.jpeg"
  },
  {
    id: 27,
    description: "S'mores",
    longDescription: "S'mores",
    icon: "./smores.png"
  },
  {
    id: 28,
    description: "PWD",
    longDescription: "Pinewood Derby",
    icon: "./pwd.png"
  },
  {
    id: 29,
    description: "RGR",
    longDescription: "Rain Gutter Regatta",
    icon: "./rgr.png"
  },
  {
    id: 30,
    description: "First Aid",
    longDescription: "First Aid",
    icon: "./first-aid.png",
  },
  {
    id: 31,
    description: "Fox Patrol",
    longDescription: "fox patrol",
    icon: "./fox-patrol.jpg",
    smallText: true
  },
  {
    id: 32,
    description: "Elliott",
    longDescription: "Elliott",
    icon: "./elliott.png"
  },
  {
    id: 33,
    description: "Finn",
    longDescription: "Finn",
    icon: "src/assets/icons/fox-patrol.png"
  },
  {
    id: 34,
    description: "Graham",
    longDescription: "Graham",
    icon: "src/assets/icons/fox-patrol.png"
  },
  {
    id: 35,
    description: "Kade",
    longDescription: "Kade",
    icon: "./kade.png"
  },
  {
    id: 36,
    description: "Lee",
    longDescription: "Lee",
    icon: "./lee.png"
  },
  {
    id: 37,
    description: "Ryker",
    longDescription: "Ryker",
    icon: "./ryker.jpg"
  },
  {
    id: 38,
    description: "Camporee",
    longDescription: "Camporee",
    icon: "./camporee.jpg"
  },
  {
    id: 39,
    description: "Merit Bdg.",
    longDescription: "Merit Badges",
    icon: "./merit-badges.jpg"
  },
  {
    id: 40,
    description: "Den Chief",
    longDescription: "Den Chief",
    icon: "./den_chief.png"
  },
  {
    id: 41,
    description: "LNT",
    longDescription: "Leave No Trace",
    icon: "./lnt.png"
  },
  {
    id: 42,
    description: "Scouting",
    longDescription: "Scouting America",
    icon: "./bsa.png"
  },
  {
    id: 43,
    description: "Scout",
    longDescription: "Scout",
    icon: "./scout.svg"
  },
  {
    id: 44,
    description: "Tenderft.",
    longDescription: "Tenderfoot",
    icon: "./tenderfoot.svg"
  },
  {
    id: 45,
    description: "2nd Class",
    longDescription: "Second Class",
    icon: "./second-class.svg"
  },
  {
    id: 46,
    description: "First Class",
    longDescription: "First class",
    icon: "./first-class.svg",
    smallText: true
  },
  {
    id: 47,
    description: "Star",
    longDescription: "Star",
    icon: "./star.svg"
  },
  {
    id: 48,
    description: "Life",
    longDescription: "Life",
    icon: "./life.svg"
  },
  {
    id: 49,
    description: "Eagle",
    longDescription: "Eagle",
    icon: "./eagle.svg"
  },
  {
    id: 50,
    description: "Palms",
    longDescription: "Eagle Palms",
    icon: "./palms.jpeg"
  },
];

export default bingoItemsArray;
