/**
 * plantTypes.js
 *
 * contains an array of plant types.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import flowerIcon from "../assets/plant-icons/flower.png";
import floweringShrubIcon from "../assets/plant-icons/flowering-shrub.png";
import shrubIcon from "../assets/plant-icons/shrub.png";
import treeIcon from "../assets/plant-icons/tree.png";
import bambooIcon from "../assets/plant-icons/bamboo.png";
import cactusIcon from "../assets/plant-icons/cactus.png";
import ornamentalGrassIcon from "../assets/plant-icons/ornamental-grass.png";
import vegetableIcon from "../assets/plant-icons/vegetable.png";
import berryIcon from "../assets/plant-icons/berry.png";
import fruitTreeIcon from "../assets/plant-icons/fruit-tree.png";
import herbIcon from "../assets/plant-icons/herb.png";
import vineIcon from "../assets/plant-icons/vine.png";
import climbingIcon from "../assets/plant-icons/climbing.png";
import aquaticIcon from "../assets/plant-icons/aquatic.png";
import tropicalIcon from "../assets/plant-icons/tropical.png";

export const plantTypes = [
  {
    id: 1,
    icon: flowerIcon,
    name: "flower",
    emoji: "🌸",
    description: "includes plants grown for their blooms.",
    examples: ["rose", "tulip", "zinnia"],
  },
  {
    id: 2,
    icon: floweringShrubIcon,
    name: "flowering shrub",
    emoji: "💐",
    description: "includes woody shrubs grown for flowers.",
    examples: ["honeysuckle", "hydrangea", "azalea"],
  },
  {
    id: 3,
    icon: shrubIcon,
    name: "shrub",
    emoji: "🌿",
    description: "includes compact, multi-stemmed woody plants.",
    examples: ["boxwood", "juniper", "spirea"],
  },
  {
    id: 4,
    icon: treeIcon,
    name: "tree",
    emoji: "🌳",
    description: "includes tall woody plants with a main trunk.",
    examples: ["maple", "oak", "pine"],
  },
  {
    id: 5,
    icon: bambooIcon,
    name: "bamboo",
    emoji: "🎍",
    description: "includes woody perennial grasses in Poaceae.",
    examples: ["golden bamboo", "black bamboo", "graceful bamboo"],
  },
  {
    id: 6,
    icon: cactusIcon,
    name: "cactus",
    emoji: "🌵",
    description: "includes water-storing plants in Cactaceae.",
    examples: ["prickly pear", "barrel cactus", "saguaro"],
  },
  {
    id: 7,
    icon: ornamentalGrassIcon,
    name: "ornamental grass",
    emoji: "🌾",
    description: "includes grasses grown for texture or movement.",
    examples: ["feather reed grass", "fountain grass", "maiden grass"],
  },
  {
    id: 8,
    icon: vegetableIcon,
    name: "vegetable",
    emoji: "🥕",
    description: "includes edible plants grown for harvest.",
    examples: ["tomato", "carrot", "broccoli"],
  },
  {
    id: 9,
    icon: berryIcon,
    name: "berry",
    emoji: "🍓",
    description: "includes plants grown for small fruits.",
    examples: ["strawberry", "blueberry", "raspberry"],
  },
  {
    id: 10,
    icon: fruitTreeIcon,
    name: "fruit tree",
    emoji: "🍎",
    description: "includes trees grown for edible fruit.",
    examples: ["apple", "peach", "lemon"],
  },
  {
    id: 11,
    icon: herbIcon,
    name: "herb",
    emoji: "🪴",
    description: "includes aromatic plants used for flavor.",
    examples: ["basil", "rosemary", "mint"],
  },
  {
    id: 12,
    icon: vineIcon,
    name: "vine",
    emoji: "🎃",
    description: "includes plants with trailing or climbing stems.",
    examples: ["grape", "pumpkin", "sweet potato"],
  },
  {
    id: 13,
    icon: climbingIcon,
    name: "climbing",
    emoji: "🪻",
    description: "includes plants that climb supports or walls.",
    examples: ["wisteria", "english ivy", "climbing rose"],
  },
  {
    id: 14,
    icon: aquaticIcon,
    name: "aquatic",
    emoji: "🪷",
    description: "includes plants that grow in or near water.",
    examples: ["lotus", "water lily", "pondweed"],
  },
  {
    id: 15,
    icon: tropicalIcon,
    name: "tropical",
    emoji: "🌺",
    description: "includes warm-climate plants with lush growth.",
    examples: ["hibiscus", "bird of paradise", "elephant ear"],
  },
];
