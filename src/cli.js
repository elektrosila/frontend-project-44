import readlineSync from 'readline-sync';

export const greeting =() => {

console.log('Welcome to the Brain Games!');

const username = readlineSync.question('What is your name? ');

console.log(`Hello, ${username}!`)
}