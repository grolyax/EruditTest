import listOfTestTemplate from '../templates/pages/listOfTests/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';
import { buttonEventLink } from '../render/button-event.js'

export default function renderTestsList() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = listOfTestTemplate;
    renderHeaderCurrentUser();
}

