import mainAnswerTrueTemplate from '../templates/pages/mainStartNextTrue/index.js';

const rootDiv = document.querySelector('.container');

export default function renderNextStartTrue() {
    rootDiv.innerHTML = mainAnswerTrueTemplate;
}
