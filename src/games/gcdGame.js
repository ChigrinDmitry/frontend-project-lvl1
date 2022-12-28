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

const getMinimalNumber = (numOne, numTwo) => {
  if (numOne < numTwo) {
    return numOne;
  }
  if (numTwo < numOne) {
    return numTwo;
  } return numOne;
};

const gameLogicGCD = () => {
  const findGCD = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let currentAnswersCount = 0;
    const allAnswersCount = 3;

    while (currentAnswersCount < allAnswersCount) {
      const randomNumberOne = getRandomNumber();
      const randomNumberTwo = getRandomNumber();
      console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);

      const minimalNumber = getMinimalNumber(randomNumberOne, randomNumberTwo);

      const getGreatestCommonDivisor = () => {
        let greatestCommonDivisor = 0;
        for (let i = 0; i <= minimalNumber; i += 1) {
          if ((randomNumberOne % i === 0) && (randomNumberTwo % i === 0)) {
            greatestCommonDivisor = i;
          }
        }
        return greatestCommonDivisor;
      };

      const answerOfUser = askQuestion('Your answer: ');
      const correctAnswer = getGreatestCommonDivisor();
      if (answerOfUser === String(correctAnswer)) {
        correct();
      } else {
        return incorrect(`${correctAnswer}`, `${answerOfUser}`);
      }

      currentAnswersCount += 1;
    }
    return congratulations();
  };
  findGCD();
};

const getGCD = () => {
  welcome();
  askName();
  greeting();
  gameLogicGCD();
};

export default getGCD;
