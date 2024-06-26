import { Fruit } from "."; // shows unused exported enum members
// import { Fruit } from './types'; // works
// import { Fruit } from "./types/fruit"; // works

const fruitBasket = {
  apple: Fruit.apple,
  orange: Fruit.orange,
};

/*
Unused exported enum members (2)
apple   Fruit  src/types/fruit.ts:4:3
orange  Fruit  src/types/fruit.ts:5:3
*/
