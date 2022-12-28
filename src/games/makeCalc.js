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

const gameLogic = () => {
  const getRandomOperation = () => {
    const mathOperations = ['*', '+', '-'];
    const randomNumber = Math.floor(Math.random() * mathOperations.length);
    const randomMathOperation = mathOperations[randomNumber];
    return randomMathOperation;
  };
  const resultOfMathOperation = (a, b, c) => {
    if (c === '*') {
      return a * b;
    }
    if (c === '+') {
      return a + b;
    } return a - b;
  };
  const makeCalc = () => {
    let currentAnswersCount = 0;
    const allAnswersCount = 3;
    while (currentAnswersCount < allAnswersCount) {
      const randomNumberOne = getRandomNumber();
      const randomNumberTwo = getRandomNumber();
      const mathOperation = getRandomOperation();

      console.log('What is the result of the expression?');
      console.log(`Question: ${randomNumberOne} ${mathOperation} ${randomNumberTwo}`);

      const correctAnswer = resultOfMathOperation(randomNumberOne, randomNumberTwo, mathOperation);
      const answer = askQuestion('Your answer: ');
      if (answer === String(correctAnswer)) {
        correct();
      } else {
        return incorrect(answer, correctAnswer);
      }
      currentAnswersCount += 1;
    }
    return congratulations();
  };
  makeCalc();
};

const brainCalc = () => {
  welcome();
  askName();
  greeting();
  gameLogic();
};

export default brainCalc;
