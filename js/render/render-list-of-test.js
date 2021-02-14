import listOfTestTemplate from '../templates/pages/listOfTests/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';

export default function renderTestsList() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    headerDiv.innerHTML = headerCurrentUserTemplate;
    rootDiv.innerHTML = listOfTestTemplate;
}