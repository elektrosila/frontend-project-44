import readlineSync from 'readline-sync';

export const greeting =() => {

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('What is your name? ');

console.log(`Hello, ${name}!`)
}