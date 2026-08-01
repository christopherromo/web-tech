/**
 * plantTypes.js
 *
 * contains an array of plant types.
 *
 * author: christopher romo
 * created: 2026-07-21
 */

import flowerImage from "../assets/plant-types/flower.png";
import floweringShrubImage from "../assets/plant-types/flowering-shrub.png";
import shrubImage from "../assets/plant-types/shrub.png";
import treeImage from "../assets/plant-types/tree.png";
import bambooImage from "../assets/plant-types/bamboo.png";
import cactusImage from "../assets/plant-types/cactus.png";
import ornamentalGrassImage from "../assets/plant-types/ornamental-grass.png";
import vegetableImage from "../assets/plant-types/vegetable.png";
import berryImage from "../assets/plant-types/berry.png";
import fruitTreeImage from "../assets/plant-types/fruit-tree.png";
import herbImage from "../assets/plant-types/herb.png";
import vineImage from "../assets/plant-types/vine.png";
import climbingImage from "../assets/plant-types/climbing.png";
import aquaticImage from "../assets/plant-types/aquatic.png";
import tropicalImage from "../assets/plant-types/tropical.png";

export const plantTypes = [
  {
    id: 1,
    image: flowerImage,
    name: "flower",
    icon: "🌸",
    description: "includes plants grown for their blooms.",
    examples: ["rose", "tulip", "zinnia"],
  },
  {
    id: 2,
    image: floweringShrubImage,
    name: "flowering shrub",
    icon: "💐",
    description: "includes woody shrubs grown for flowers.",
    examples: ["honeysuckle", "hydrangea", "azalea"],
  },
  {
    id: 3,
    image: shrubImage,
    name: "shrub",
    icon: "🌿",
    description: "includes compact, multi-stemmed woody plants.",
    examples: ["boxwood", "juniper", "spirea"],
  },
  {
    id: 4,
    image: treeImage,
    name: "tree",
    icon: "🌳",
    description: "includes tall woody plants with a main trunk.",
    examples: ["maple", "oak", "pine"],
  },
  {
    id: 5,
    image: bambooImage,
    name: "bamboo",
    icon: "🎍",
    description: "includes woody perennial grasses in Poaceae.",
    examples: ["golden bamboo", "black bamboo", "graceful bamboo"],
  },
  {
    id: 6,
    image: cactusImage,
    name: "cactus",
    icon: "🌵",
    description: "includes water-storing plants in Cactaceae.",
    examples: ["prickly pear", "barrel cactus", "saguaro"],
  },
  {
    id: 7,
    image: ornamentalGrassImage,
    name: "ornamental grass",
    icon: "🌾",
    description: "includes grasses grown for texture or movement.",
    examples: ["feather reed grass", "fountain grass", "maiden grass"],
  },
  {
    id: 8,
    image: vegetableImage,
    name: "vegetable",
    icon: "🥕",
    description: "includes edible plants grown for harvest.",
    examples: ["tomato", "carrot", "broccoli"],
  },
  {
    id: 9,
    image: berryImage,
    name: "berry",
    icon: "🍓",
    description: "includes plants grown for small fruits.",
    examples: ["strawberry", "blueberry", "raspberry"],
  },
  {
    id: 10,
    image: fruitTreeImage,
    name: "fruit tree",
    icon: "🍎",
    description: "includes trees grown for edible fruit.",
    examples: ["apple", "peach", "lemon"],
  },
  {
    id: 11,
    image: herbImage,
    name: "herb",
    icon: "🪴",
    description: "includes aromatic plants used for flavor.",
    examples: ["basil", "rosemary", "mint"],
  },
  {
    id: 12,
    image: vineImage,
    name: "vine",
    icon: "🎃",
    description: "includes plants with trailing or climbing stems.",
    examples: ["grape", "pumpkin", "sweet potato"],
  },
  {
    id: 13,
    image: climbingImage,
    name: "climbing",
    icon: "🪻",
    description: "includes plants that climb supports or walls.",
    examples: ["wisteria", "english ivy", "climbing rose"],
  },
  {
    id: 14,
    image: aquaticImage,
    name: "aquatic",
    icon: "🪷",
    description: "includes plants that grow in or near water.",
    examples: ["lotus", "water lily", "pondweed"],
  },
  {
    id: 15,
    image: tropicalImage,
    name: "tropical",
    icon: "🌺",
    description: "includes warm-climate plants with lush growth.",
    examples: ["hibiscus", "bird of paradise", "elephant ear"],
  },
];
