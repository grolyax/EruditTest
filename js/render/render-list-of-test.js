import listOfTestTemplate from '../templates/pages/listOfTests/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';
import { replaceLinksBehavior } from '../routing.js';

export default function renderTestsList() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = listOfTestTemplate;
    renderHeaderCurrentUser();
    replaceLinksBehavior();
}

