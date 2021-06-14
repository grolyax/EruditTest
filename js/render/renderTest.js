import TestTemplate from '../templates/pages/pageTest/index.js';
import TestTextTemplate from '../templates/pages/testText/index.js';
import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';
import QuestionsCountTemplate from '../templates/pages/questionsCount/index.js';
import FooterTestForm from '../templates/pages/footer-test/index.js';
import { navigateToUrl } from '../routing.js';
import pictureTestList from '../testArray/pictureTestList.js';
import textTestList from '../testArray/textTestList.js';
import currentUser from '../current-user.js';
import userList from '../users.js';
import storageService from '../storage-service.js';
import { translateTopic } from '../render/render-main-personal.js';

let textQuiz = [];
let pictQuiz = [];
let questionsUsed = [];
let questionsUsed2 = [];
let indexOfQuestion;
let score = 0;

const renderTestPictures = () => {
    const rootOl = document.querySelector('.theme__question');
    rootOl.innerHTML = TestPicturesTemplate;
};

const renderTestText = () => {
    const rootOl = document.querySelector('.theme__question');
    rootOl.innerHTML = TestTextTemplate;
};

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

    if (questionsUsed2.length > 4) {
        let topic = window.location.href.match('topic=(?<topic>.+)').groups.topic;
        let dateString = (new Date()).toLocaleDateString();

        userList.updateUserScoreById(currentUser.userData.id, topic, score, dateString);
        storageService.set('users', JSON.stringify(userList.users));
        currentUser.userData = userList.getUserByEmail(currentUser.userData.email); // должен идти перед currentScore, так как он временное поле
        currentUser.userData.currentScore = score;
        storageService.set('currentUser', JSON.stringify(currentUser.userData));
        navigateToUrl(`/resultTest?topic=${topic}`);

        return;
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
        if (numberOfQuestion.innerText <= 15) {

            if (input.checked && input.id[input.id.length - 1] - 1 === textQuiz[indexOfQuestion].trueValue) {
                score++;
            }
        } else {
            if (input.checked && input.id[input.id.length - 1] - 1 === pictQuiz[indexOfQuestion].trueValue) {
                score++;
            }
        }
        input.checked = false;
    })
    console.log(score);
};

const createButtonListeners = () => {
    const btnAccept = document.querySelector('.accept');
    const progressBarElement = document.querySelector(".progress__bar");
    btnAccept.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const inputArray = document.querySelectorAll('input[type="radio"]');
        inputArray.forEach(input => {
            if (input.checked) {
                checkCorrectness();
                randomQuestion();
                progressBarElement.style.width = `${progressBarElement.clientWidth + 25}px`;
            }
        })
    });
};

export default function renderTest() {
    textQuiz = [];
    pictQuiz = [];
    questionsUsed = [];
    questionsUsed2 = [];
    indexOfQuestion;
    score = 0;

    let topic = window.location.href.match('topic=(?<topic>.+)').groups.topic;

    textQuiz = textTestList[topic];
    pictQuiz = pictureTestList[topic];

    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestTemplate;

    const questionsCount = document.querySelector('.questions__count');
    const footer = document.querySelector('.footer');
    questionsCount.innerHTML = QuestionsCountTemplate;
    footer.innerHTML = FooterTestForm;

    renderHeaderCurrentUser();
    const themElement = document.querySelector('.thems__test');
    themElement.innerText = translateTopic(topic);

    createButtonListeners();
    renderTestText();
    randomQuestion();
};