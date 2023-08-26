// src/index.js
const fruits = require('./foods');
const { choice, remove } = require('./helpers');

const selectedFruit = choice(fruits);

console.log(`I'd like one ${selectedFruit}, please.`);
console.log(`Here you go: ${selectedFruit}`);
console.log('Delicious! May I have another?');

remove(fruits, selectedFruit);

const remainingFruits = fruits.join(', '); // Add 'fruits.' before 'join'
console.log(`I'm sorry, we're all out. We have ${remainingFruits} left.`);