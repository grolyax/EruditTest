import resultTestTemplate from '../templates/pages/resultTest/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';
import currentUser from '../current-user.js';
import userList from '../users.js';
import { translateTopic } from '../render/render-main-personal.js';
import { replaceLinksBehavior } from '../routing.js';

export const MAX_TABLE_SIZE = 8;

export default function renderResultTest() {
    let topic = window.location.href.match('topic=(?<topic>.+)').groups.topic;
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = resultTestTemplate;

    const topicElement = document.querySelector('.thems__test');
    topicElement.innerText = translateTopic(topic);

    const scoreElement = document.getElementById('score');
    scoreElement.innerText = currentUser.userData.currentScore;

    const repeatTest = document.getElementById('repeat');
    repeatTest.href = `/test?topic=${topic}`;
    renderHeaderCurrentUser();
    renderTable(topic);
}

const renderTable = (topic) => {
    let newUserList = [...userList.users];
    newUserList.sort((userA, userB) => {
        return userB.score[topic] - userA.score[topic];
    });
    newUserList = newUserList.slice(0, MAX_TABLE_SIZE);

    let tableElement = document.querySelector('.records__test');
    newUserList.forEach((user, index) => {
        
        let trElement = document.createElement('tr');
        trElement.innerHTML = `
            <th class="table__order">${index + 1}</th>
            <th class="table__name">${user.email}</th>
            <th class="table__offset">${user.score[topic]}</th>
            <th class="table__failure">${20 - user.score[topic]}</th>
        `
        tableElement.appendChild(trElement);

        replaceLinksBehavior();
    })
}
