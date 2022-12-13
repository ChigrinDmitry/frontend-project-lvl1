import readlineSync from 'readline-sync';

/* eslint-disable no-alert, no-console */

const askQuestion = (text) => {
	return readlineSync.question(text);
}

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } 
  return 'no';
};

const checkEven = () => {
  console.log('Welcome to the Brain games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

	let currentAnswersCount = 0;
	const allAnswersCount = 3;

	while(currentAnswersCount < allAnswersCount ) {
		const randomNumber = Math.round(Math.random() * 100);
    const correctAnswer = isEven(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const answerOfUser = askQuestion('Your answer: ');
    if (answerOfUser === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`
      );
    }
		currentAnswersCount += 1;
	}

  return console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
/* eslint-enable no-alert, no-console */
