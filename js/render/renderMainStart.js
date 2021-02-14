
import mainStartTemplate from '../templates/pages/mainStart/index.js';
import headerAccountTemplate from '../templates/pages/headerAccount/index.js';


export default function renderMainStart() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    headerDiv.innerHTML = headerAccountTemplate;
    rootDiv.innerHTML = mainStartTemplate;
}

