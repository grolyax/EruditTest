import TestPicturesTemplate from '../templates/pages/testPictures/index.js';
export const renderTestPictures = () => {
    const rootOl = document.querySelector('.theme__question');
    rootOl.innerHTML = TestPicturesTemplate;
};