import TestTextTemplate from '../templates/pages/testText/index.js';
import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';
import FooterTestForm from '../templates/pages/footer-test/index.js';
import { textQuiz } from '../testArray/history/textTest.js';
import { pictQuiz } from '../testArray/history/pictureTest.js';



const renderTestPictures = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestPicturesTemplate;
}

const renderTestText = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestTextTemplate;
}


function renderValueTextTest() {
    
    let indexOfQuestion;

    let randomNumber = Math.floor(Math.random() * textQuiz.length);
    indexOfQuestion = randomNumber;
    

    const question = document.querySelector('.test__question');


    const value1 = document.querySelector('.text__answer1'),
            value2 = document.querySelector('.text__answer2'),
            value3 = document.querySelector('.text__answer3'),
            value4 = document.querySelector('.text__answer4');

   

    question.innerHTML = textQuiz[indexOfQuestion].question;
    value1.innerHTML = textQuiz[indexOfQuestion].values[0];
    value2.innerHTML = textQuiz[indexOfQuestion].values[1];
    value3.innerHTML = textQuiz[indexOfQuestion].values[2];
    value4.innerHTML = textQuiz[indexOfQuestion].values[3];

    //createEventListener(indexOfQuestion);
};



export default function renderTest() {
    renderTestText();

    const headerDiv = document.querySelector('.account');
    const footer = document.querySelector('.footer');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    footer.innerHTML = FooterTestForm;

    renderValueTextTest();

}