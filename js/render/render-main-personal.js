import personAreaTemplate from '../templates/pages/mainPersonal/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';

export default function renderMainPersonal() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = personAreaTemplate;

    renderHeaderCurrentUser();
}
