const bingoItemsArray = [
  {
    id: 1,
    description: "Cub Scouts",
    longDescription: "Cub Scouts",
    icon: "src/assets/icons/cub-scouts.svg"
  },
  {
    id: 2,
    description: "bobcat",
    longDescription: "Bobcat",
    icon: "src/assets/icons/bobcat.svg"
  },
  {
    id: 3,
    description: "Lion",
    longDescription: "Lion",
    icon: "src/assets/icons/lion.svg"
  },
  {
    id: 4,
    description: "Tiger",
    longDescription: "Tiger",
    icon: "src/assets/icons/tiger.svg"
  },
  {
    id: 5,
    description: "Wolf",
    longDescription: "Wolf",
    icon: "src/assets/icons/wolf.svg"
  },
  {
    id: 6,
    description: "Bear",
    longDescription: "Bear",
    icon: "src/assets/icons/bear.svg"
  },
  {
    id: 7,
    description: "Webelos",
    longDescription: "Webelos",
    icon: "src/assets/icons/webelos.svg"
  },
  {
    id: 8,
    description: "AOL",
    longDescription: "Arrow of Light",
    icon: "./src/assets/icons/aol.svg"
  },
  {
    id: 9,
    description: "Whittling",
    longDescription: "Whittling chip",
    icon: "src/assets/icons/whittling-chip.svg"
  },
  {
    id: 10,
    description: "Archery",
    longDescription: "Archery",
    icon: "src/assets/icons/archery.svg"
  },
  {
    id: 11,
    description: "Firemaking",
    longDescription: "Firemaking",
    icon: "src/assets/icons/firemaking.jpeg",
    smallText: true
  },
  {
    id: 12,
    description: "swimming",
    longDescription: "Swimming",
    icon: "src/assets/icons/swimming.png"
  },
  {
    id: 13,
    description: "Survival c.",
    longDescription: "Survival Camp",
    icon: "src/assets/icons/survival-camp.png"
  },
  {
    id: 14,
    description: "Sq. knot",
    longDescription: "square knot",
    icon: "src/assets/icons/square-knot.svg"
  },
  {
    id: 15,
    description: "hiking",
    longDescription: "hiking",
    icon: "src/assets/icons/hiking.jpeg",
  },
  {
    id: 16,
    description: "neckerchief",
    longDescription: "neckerchief",
    icon: "src/assets/icons/neckerchief.png",
    smallText: true
  },
  {
    id: 17,
    description: "Scout life",
    longDescription: "Scout Life",
    icon: "src/assets/icons/scout-life.jpeg"
  },
  {
    id: 18,
    description: "6 essentials",
    longDescription: "Six Essentials",
    icon: "src/assets/icons/6-essentials.png",
    smallText: true
  },
  {
    id: 19,
    description: "Handbook",
    longDescription: "Scout handbook",
    icon: "src/assets/icons/scout-handbook.jpeg"
  },
  {
    id: 20,
    description: "Bearnival",
    longDescription: "Bearnival",
    icon: "src/assets/icons/bearnival.png"
  },
  {
    id: 21,
    description: "Bridging",
    longDescription: "Bridging Ceremony",
    icon: "src/assets/icons/bridging.jpeg"
  },
  {
    id: 22,
    description: "Blue & Gold",
    longDescription: "Blue & gold",
    icon: "src/assets/icons/B&G.png",
    smallText: true
  },
  {
    id: 23,
    description: "Pack 461",
    longDescription: "Pack 461",
    icon: "src/assets/icons/461.png"
  },
  {
    id: 24,
    description: "Scout Sign",
    longDescription: "Scout Sign",
    icon: "src/assets/icons/scout-sign.png"
  },
  {
    id: 25,
    description: "Campfire",
    longDescription: "Campfire",
    icon: "src/assets/icons/campfire.jpeg"
  },
  {
    id: 26,
    description: "Tents",
    longDescription: "Tents",
    icon: "src/assets/icons/tents.jpeg"
  },
  {
    id: 27,
    description: "S'mores",
    longDescription: "S'mores",
    icon: "src/assets/icons/smores.png"
  },
  {
    id: 28,
    description: "PWD",
    longDescription: "Pinewood Derby",
    icon: "src/assets/icons/pwd.png"
  },
  {
    id: 29,
    description: "RGR",
    longDescription: "Rain Gutter Regatta",
    icon: "src/assets/icons/rgr.png"
  },
  {
    id: 30,
    description: "First Aid",
    longDescription: "first aid",
    icon: "src/assets/icons/first-aid.png",
  },
  {
    id: 31,
    description: "Christopher",
    longDescription: "Christopher",
    icon: "src/assets/icons/christopher.jpg",
    smallText: true
  },
  {
    id: 32,
    description: "William",
    longDescription: "William",
    icon: "src/assets/icons/william.png"
  },
  {
    id: 33,
    description: "Jaden",
    longDescription: "Jaden",
    icon: "src/assets/icons/jaden.png"
  },
  {
    id: 34,
    description: "Alexis",
    longDescription: "Alexis",
    icon: "src/assets/icons/alexis.png"
  },
  {
    id: 35,
    description: "Brady",
    longDescription: "Brady",
    icon: "src/assets/icons/brady.png"
  },
  {
    id: 36,
    description: "Wesley",
    longDescription: "Wesley",
    icon: "src/assets/icons/wesley.jpg"
  },
  {
    id: 37,
    description: "Townes",
    longDescription: "Townes",
    icon: "src/assets/icons/townes.jpg"
  },
  {
    id: 38,
    description: "Kinnik",
    longDescription: "Kinnik",
    icon: "src/assets/icons/kinnik.jpg"
  },
  {
    id: 39,
    description: "Halian",
    longDescription: "Halian",
    icon: "src/assets/icons/halian.jpg"
  },
  {
    id: 40,
    description: "Brandon",
    longDescription: "Brandon",
    icon: "src/assets/icons/brandon.jpeg"
  },
  {
    id: 41,
    description: "Maggie",
    longDescription: "Maggie",
    icon: "src/assets/icons/maggie.jpg"
  },
  {
    id: 42,
    description: "Nami",
    longDescription: "Nami",
    icon: "src/assets/icons/nami.svg"
  },
  {
    id: 43,
    description: "BSA",
    longDescription: "Boys Scouts of America",
    icon: "src/assets/icons/bsa.png"
  },
  {
    id: 44,
    description: "Scout",
    longDescription: "Scout",
    icon: "./src/assets/icons/scout.svg"
  },
  {
    id: 45,
    description: "Tenderft.",
    longDescription: "Tenderfoot",
    icon: "./src/assets/icons/tenderfoot.SVG"
  },
  {
    id: 46,
    description: "2nd Class",
    longDescription: "Second Class",
    icon: "src/assets/icons/second-class.svg"
  },
  {
    id: 47,
    description: "First Class",
    longDescription: "First class",
    icon: "src/assets/icons/first-class.svg",
    smallText: true
  },
  {
    id: 48,
    description: "Star",
    longDescription: "Star",
    icon: "src/assets/icons/star.svg"
  },
  {
    id: 49,
    description: "Life",
    longDescription: "Life",
    icon: "src/assets/icons/life.svg"
  },
  {
    id: 50,
    description: "Eagle",
    longDescription: "Eagle",
    icon: "src/assets/icons/eagle.svg"
  },
];

export default bingoItemsArray;
