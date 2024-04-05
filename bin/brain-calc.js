import { playGame, getRandomNumber } from '../src/gneg.js';

const pravilo = 'What is the result of the expression?';

const getCorrectAnswer = (chislo1, sign, chislo2) => {
  switch (sign) {
    case '+':
      return chislo1 + chislo2;
    case '-':
      return chislo1 - chislo2;
    case '*':
      return chislo1 * chislo2;
    default:
      return null;
  }
};

const generateRound = () => {
  const mathOperator = ['+', '-', '*'];
  const getMathOperator = mathOperator[getRandomNumber(0, mathOperator.length - 1)];
  const chislo1 = getRandomNumber(1, 50);
  const chislo2 = getRandomNumber(1, 50);
  const question = `${chislo1} ${getMathOperator} ${chislo2}`;
  const correctAnswer = getCorrectAnswer(chislo1, getMathOperator, chislo2).toString();
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  playGame(pravilo, generateRound);
};

startBrainCalc();