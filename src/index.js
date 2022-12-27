import readlineSync from 'readline-sync';

/* eslint-disable no-alert, no-console */
let userName = '';

export const welcome = () => {
  console.log('Welcome to the Brain games!');
};

export const askName = () => {
  userName = readlineSync.question('May I have your name? ');
};

export const getUserName = () => userName;

export const greeting = () => {
  console.log(`Hello, ${getUserName()}!`);
};

export const askQuestion = (text) => readlineSync.question(text);

export const getRandomNumber = () => Math.round(Math.random() * 10);

export const correct = () => console.log('Correct!');

export const incorrect = (correctAnswer, incorrectAnswer) => console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName()}!`);

export const congratulations = () => console.log(`Congratulations, ${getUserName()}!`);

export const repeatForThreeTimes = (game) => {
  let currentAnswersCount = 0;
  const allAnswersCount = 3;
  while (currentAnswersCount < allAnswersCount) {
    game();
    currentAnswersCount += 1;
  }
};

/* eslint-enable no-alert, no-console */
