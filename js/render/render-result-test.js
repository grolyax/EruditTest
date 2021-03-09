import resultTestTemplate from '../templates/pages/resultTest/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';

export default function  renderResultTest() {
    let topic = window.location.href.match('topic=(?<topic>.+)').groups.topic;
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = resultTestTemplate;
    
    const topicElement = document.querySelector('.thems__test');
    topicElement.innerText = topic;

    const repeatTest = document.getElementById('repeat');
    repeatTest.href = `/test?topic=${topic}`;
    renderHeaderCurrentUser();
}

