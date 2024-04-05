import readlineSync from 'readline-sync';

const popitka = 3;

export const playGame = (pravilo, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(pravilo);

  for (let i = 0; i < popitka; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
    if (i === popitka - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);