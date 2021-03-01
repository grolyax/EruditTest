import mainAnswerFaulseTemplate from '../templates/pages/mainStartNextFaulse/index.js';

const rootDiv = document.querySelector('.container');

export default function renderNextStartFaulse() {
    rootDiv.innerHTML = mainAnswerFaulseTemplate;
}
