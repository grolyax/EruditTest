import listOfTestTemplate from '../templates/pages/listOfTests/index.js';
import headerCurrentUserTemplate  from '../templates/pages/headerCurrentUser/index.js';

const headerDiv = document.querySelector('.account');
const rootDiv = document.querySelector('.container');

export default function renderHeaderUser() {
    headerDiv.innerHTML = headerCurrentUserTemplate;
}

export default function renderTestsList() {
    rootDiv.innerHTML = listOfTestTemplate;
}