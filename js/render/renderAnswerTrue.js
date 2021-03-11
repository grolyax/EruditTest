import mainAnswerTrueTemplate from '../templates/pages/mainStartNextTrue/index.js';
import { replaceLinksBehavior } from '../routing.js';

const rootDiv = document.querySelector('.container');

export default function renderNextStartTrue() {
    rootDiv.innerHTML = mainAnswerTrueTemplate;

    replaceLinksBehavior();
}
