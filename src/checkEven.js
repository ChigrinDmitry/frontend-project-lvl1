import readlineSync from 'readline-sync';

/* eslint-disable no-alert, no-console */

const askName = () => {
  return readlineSync.question('May I have your name? ');
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const checkEven = () => {
  console.log('Welcome to the Brain games!');
  const userName = askName();
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const correctAnswer = isEven(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const answerOfUser = readlineSync.question('Your answer: ');
    if (answerOfUser === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again,  ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
/* eslint-enable no-alert, no-console */
