// import readlineSync from 'readline-sync';
import {
  welcome,
  greeting,
  askName,
  askQuestion,
  getRandomNumber,
  correct,
  incorrect,
  congratulations,
} from '../index.js';

/* eslint-disable no-alert, no-console */

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameLogic = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let currentAnswersCount = 0;
  const allAnswersCount = 3;

  while (currentAnswersCount < allAnswersCount) {
    const answer = getRandomNumber();
    const correctAnswer = isEven(answer);
    console.log(`Question: ${answer}`);
    const answerOfUser = askQuestion('Your answer: ');
    if (answerOfUser === correctAnswer) {
      correct();
    } else {
      return incorrect('yes', 'no');
    }
    currentAnswersCount += 1;
  }
  return congratulations();
};

const checkEven = () => {
  welcome();
  askName();
  greeting();
  gameLogic();
};

export default checkEven;
/* eslint-enable no-alert, no-console */
