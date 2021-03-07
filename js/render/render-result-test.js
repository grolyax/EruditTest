import resultTestTemplate from '../templates/pages/resultTest/index.js';
import HeaderCurrentUserTemplate from '../templates/pages/headerCurrentUser/index.js';

export default function  renderResultTest() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    rootDiv.innerHTML = resultTestTemplate;
    headerDiv.innerHTML = HeaderCurrentUserTemplate;
}

