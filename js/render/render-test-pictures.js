import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
import { replaceLinksBehavior } from '../routing.js';

export const renderTestPictures = () => {
    const rootOl = document.querySelector('.theme__question');
    rootOl.innerHTML = TestPicturesTemplate;

    replaceLinksBehavior();
};