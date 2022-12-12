import readlineSync from 'readline-sync';

/* 
1. вызов функции в брэйн-ивен
2. в чек ивен -
    цикл:
    1. создаю и потом 
    показываю случайное число 
    (рандом)
    2. если четность числа
     четное/нечет и он
    ответил, что четное/нечет - 
    следующий шаг, 
    иначе -  
    - завершаю игру
    тут, думаю, нужен 
    ретерн 
    3.  если все ок - ретерн
    после цикла

    // Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


*/

const checkEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        let numberForCheck = Math.random();
        let correctAnswer;

        if (numberForCheck % 2 === 0) {
            correctAnswer = 'yes'
        } else {
            correctAnswer = 'no'
        }
        
        console.log(`Question: ${numberForCheck}`);

        let answerOfUser = readlineSync.question('Your answer: ')
        if (answerOfUser === correctAnswer) {
            console.log ('Congratulations, Bill!') 
        } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!`);
            i = 3;
        }
    }
}

export default checkEven;