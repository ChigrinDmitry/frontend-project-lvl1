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
  console.log('What number is missing in the progression?');
  const getProgressionLine = () => {
    const elementsOfProgression = [];
    const startNumber = getRandomNumber();
    const stepOfProgression = getRandomNumber();

    elementsOfProgression.push(startNumber);

    for (let i = 0; i < 10; i += 1) {
      const currentElem = elementsOfProgression[i];
      const nextElem = currentElem + stepOfProgression;
      elementsOfProgression.push(nextElem);
    }

    const numberOfHiddenElement = Math.floor(Math.random() * elementsOfProgression.length);
    elementsOfProgression[numberOfHiddenElement] = '..';

    const progressionLine = elementsOfProgression.join(' ');
    const hiddenElement = startNumber + (numberOfHiddenElement * stepOfProgression);
    const result = [];
    result.push(progressionLine, hiddenElement);

    return result;
  };

  let currentAnswersCount = 0;
  const allAnswersCount = 3;

  while (currentAnswersCount < allAnswersCount) {
    const values = getProgressionLine();
    console.log(`Question: ${values[0]}`);

    const answerOfUser = askQuestion('Your answer: ');
    const correctAnswer = values[1];
    if (answerOfUser === String(correctAnswer)) {
      correct();
    } else {
      return incorrect(`${correctAnswer}`, `${answerOfUser}`);
    }

    currentAnswersCount += 1;
  }

  return congratulations();
};

const progressionGame = () => {
  welcome();
  askName();
  greeting();
  gameLogic();
};

export default progressionGame;
