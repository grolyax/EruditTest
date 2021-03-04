import TestTextTemplate from '../templates/pages/testText/index.js';
import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';
import FooterTestForm from '../templates/pages/footer-test/index.js';
import textQuiz from '../testArray/history/textTest.js';
import imgQuiz from '../testArray/history/pictureTest.js';



const renderTestPictures = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestPicturesTemplate;
}

const renderTestText = () => {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = TestTextTemplate;
}


export default function renderTest() {
    renderTestText();

    const headerDiv = document.querySelector('.account');
    const footer = document.querySelector('.footer');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    footer.innerHTML = FooterTestForm;

}