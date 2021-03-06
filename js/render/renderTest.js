import TestTextTemplate from '../templates/pages/testText/index.js';
import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import headerCurrentUserTemplate from '../templates/pages/headerCurrentUser/index.js';
import FooterTestForm from '../templates/pages/footer-test/index.js';
import { textQuiz } from '../testArray/history/textTest.js';
import { pictQuiz } from '../testArray/history/pictureTest.js';

const renderTestPictures = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestPicturesTemplate;
    const footer = document.querySelector('.footer');

    footer.innerHTML = FooterTestForm;
    createButtonListeners();
};

const renderTestText = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestTextTemplate;
};

let questionsUsed = [];
let questionsUsed2 = [];
let indexOfQuestion;
let score = 0;

const randomQuestion = () => {

    let randomNumber = Math.floor(Math.random() * textQuiz.length);
    let hitDuplicate = false;

    if (questionsUsed.length > 14) {
        renderTestPictures();
        randomPictQuestion();

        return;
    } else {
        if (questionsUsed.length > 0) {
            questionsUsed.forEach(item => {
                if (item === randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();

                return;
            } else {
                indexOfQuestion = randomNumber;
                renderValueTextTest();
            }
        };
        if (questionsUsed.length === 0) {
            indexOfQuestion = randomNumber;
            renderValueTextTest();
        }

    };

    questionsUsed.push(indexOfQuestion);
    console.log(questionsUsed);
    const numberOfQuestion = document.getElementById('number__question');
    numberOfQuestion.innerText = questionsUsed.length;
};


function renderValueTextTest() {

    const question = document.querySelector('.test__question');

    const value1 = document.querySelector('.answer1'),
        value2 = document.querySelector('.answer2'),
        value3 = document.querySelector('.answer3'),
        value4 = document.querySelector('.answer4');

    question.innerHTML = textQuiz[indexOfQuestion].question;
    value1.innerHTML = textQuiz[indexOfQuestion].values[0];
    value2.innerHTML = textQuiz[indexOfQuestion].values[1];
    value3.innerHTML = textQuiz[indexOfQuestion].values[2];
    value4.innerHTML = textQuiz[indexOfQuestion].values[3];
};

const randomPictQuestion = () => {
    let randomNumber2 = Math.floor(Math.random() * pictQuiz.length);
    let hitDuplicate2 = false;

    if (questionsUsed2.length > 5) {
        navigateToUrl('/resultTest');
    } else {
        if (questionsUsed2.length > 0) {
            questionsUsed2.forEach(item => {
                if (item === randomNumber2) {
                    hitDuplicate2 = true;
                }
            });
            if (hitDuplicate2) {
                randomPictQuestion();

                return;
            } else {
                indexOfQuestion = randomNumber2;
                renderValuePictTest();
            }
        }
        if (questionsUsed2.length === 0) {
            indexOfQuestion = randomNumber2;
            renderValuePictTest();
        };
    };
    questionsUsed2.push(indexOfQuestion);
    console.log(questionsUsed2);
    const numberOfQuestion = document.getElementById('number__question');
    numberOfQuestion.innerText = 15 + questionsUsed2.length;
};


function renderValuePictTest() {
    const question = document.querySelector('.test__question');

    const img1 = document.querySelector('.img__value1'),
        img2 = document.querySelector('.img__value2'),
        img3 = document.querySelector('.img__value3'),
        img4 = document.querySelector('.img__value4');

    question.innerHTML = pictQuiz[indexOfQuestion].question;
    img1.src = pictQuiz[indexOfQuestion].values[0];
    img2.src = pictQuiz[indexOfQuestion].values[1];
    img3.src = pictQuiz[indexOfQuestion].values[2];
    img4.src = pictQuiz[indexOfQuestion].values[3];

}

const checkCorrectness = () => {
    
    const inputArray = document.querySelectorAll('input[type="radio"]');
    inputArray.forEach(input => {
        const numberOfQuestion = document.getElementById('number__question');
        if(numberOfQuestion.innerText <= 15) {
            if(input.checked && input.id[input.id.length - 1] - 1 === textQuiz[indexOfQuestion].trueValue) {
                score++;
            } 
        } else {
            if(input.checked && input.id[input.id.length - 1] - 1 === pictQuiz[indexOfQuestion].trueValue) {
                score++;
            } 
        }
        input.checked = false;
    })

   
    console.log(score);
};


const createButtonListeners = () => {
    const btnAccept = document.querySelector('.accept');

    btnAccept.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const inputArray = document.querySelectorAll('input[type="radio"]');
        inputArray.forEach(input => {
            if(input.checked) {
                checkCorrectness();
                randomQuestion();
            }
         })
    });
};

export default function renderTest() {

    renderTestText();
    randomQuestion();
    const headerDiv = document.querySelector('.account');
    const footer = document.querySelector('.footer');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    footer.innerHTML = FooterTestForm;
    createButtonListeners();

};