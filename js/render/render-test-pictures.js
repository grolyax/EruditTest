import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';

export default function renderTestPictures() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    rootDiv.innerHTML = TestPicturesTemplate;
}