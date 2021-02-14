import mainStartAnswerTemplate from '../templates/pages/mainStartNext/index.js';

const rootDiv = document.querySelector('.container');

export default function renderMainStart() {
    rootDiv.innerHTML = mainStartAnswerTemplate;
}
