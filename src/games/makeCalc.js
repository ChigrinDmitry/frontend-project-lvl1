import readlineSync from 'readline-sync';
import {
  welcome,
  greeting, 
  askName, 
  askQuestion, 
  getRandomNumber, 
  correct, 
  incorrect, 
  congratulations, 
  repeatForThreeTimes,
  userName
} from '../index.js';


const gameLogic = () => {

  const getRandomOperation = () => {
    let mathOperations = ['*', '+', '-'];
    let randomNumber = Math.floor(Math.random() * mathOperations.length);
    let randomMathOperation = mathOperations[randomNumber];
    return randomMathOperation;
  };

  const resultOfMathOperation = (a, b, c) => {
    if (c === '*') {
      return a * b;
    } else if (c === '+') {
      return a + b;
    } else {
      return a - b;
    }
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
      if (answer == correctAnswer) {
        correct();;
      } else {
        return incorrect(answer, correctAnswer);
      }
      currentAnswersCount += 1;
    }
    return congratulations();
  };

  makeCalc();

}

const brainCalc = () => {
  welcome();
  askName();
  greeting();
  gameLogic();
}

export default brainCalc;
