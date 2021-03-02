
import { navigateToUrl } from '../routing.js';

export const createEventListener = (indexOfQuestion) => {
    const fieldValue = document.querySelector('.field__value');

    fieldValue.addEventListener('click', (event) => {

        if(event.target.innerText === startQuiz[indexOfQuestion].values[startQuiz[indexOfQuestion].trueValue]) {
            navigateToUrl('/mainStartNextTrue');
        } else if(event.target.tagName === 'BUTTON') {

            navigateToUrl('/mainStartNextFalse');
        } 
    })
};
