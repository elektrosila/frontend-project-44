import readlineSync from 'readline-sync';

export const greeting =() => {

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('What is your name? ');

console.log(`Hello, ${userName}!`)
}