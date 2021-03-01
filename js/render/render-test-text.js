import TestTextTemplate from '../templates/pages/testText/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';

export default function renderTestText() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    rootDiv.innerHTML = TestTextTemplate;
}