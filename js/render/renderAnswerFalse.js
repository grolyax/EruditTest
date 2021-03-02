import mainAnswerFalseTemplate from '../templates/pages/mainStartNextFalse/index.js';

const rootDiv = document.querySelector('.container');

export default function renderNextStartFalse() {
    rootDiv.innerHTML = mainAnswerFalseTemplate;
}
