import mainAnswerFalseTemplate from '../templates/pages/mainStartNextFalse/index.js';
import { replaceLinksBehavior } from '../routing.js';

const rootDiv = document.querySelector('.container');

export default function renderNextStartFalse() {
    rootDiv.innerHTML = mainAnswerFalseTemplate;

    replaceLinksBehavior();
}
