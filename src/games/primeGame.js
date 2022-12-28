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
  
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isPrime = (num) => {
    const divisors = [];
    for (let i = 1; i < num; i += 1) {
      if (num % i === 0) {
        divisors.push(i);
      };
    }
    if ((divisors.length > 1) || (num <= 1)) {
      return 'no'
    } return 'yes'
  }
  
  let currentAnswersCount = 0;
  const allAnswersCount = 3;

  while (currentAnswersCount < allAnswersCount) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`); 
    const answerOfUser = askQuestion('Your answer: ');
    const correctAnswer = isPrime(randomNumber);
    if (answerOfUser == correctAnswer) {
      correct();
    } else {
      return incorrect(`${correctAnswer}`, `${answerOfUser}`);
    }
    currentAnswersCount += 1;
  }
  return congratulations();
}

const primeGame = () => {
  welcome();
  askName();
  greeting();
  gameLogic();
};

export default primeGame;