import personAreaTemplate from '../templates/pages/mainPersonal/index.js';
import renderHeaderCurrentUser from '../render/renderHeaderCurrentUser.js';
import currentUser from '../current-user.js';
import { replaceLinksBehavior } from '../routing.js';

export default function renderMainPersonal() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = personAreaTemplate;

    replaceLinksBehavior();

    renderHeaderCurrentUser();
    renderTable();
}

const renderTable = () => {
    let tableElement = document.querySelector('.records');

    Object.keys(currentUser.userData.score).forEach(key => {
        currentUser.userData.score[key]

        let trElement = document.createElement('tr');
        trElement.innerHTML = `
        <th class="table-thems">${translateTopic(key)}</th>
        <th class="table-points">${currentUser.userData.score[key]}</th>
    `
     tableElement.appendChild(trElement);
    });
}

export const translateTopic = (topicName) => {
    switch(topicName) {
        case 'history':
            return "История";
        case 'politics':
            return 'Политика';
        case 'geography':
            return 'География';
        case 'literature':
            return 'Литература';
        case 'architecture':
            return 'Архитектура';
        case 'nature':
            return 'Природа';
        case 'society':
            return 'Общество';
        case 'technique':
            return 'Техника';
        default:
            return '';
    }
}