
import renderTest from './renderTest.js';

export const buttonEventLink = () => {
const btnTechnique = document.getElementById('technique');
btnTechnique.addEventListener('click', renderTest);

const btnPolitics = document.getElementById('politics');
btnPolitics.addEventListener('click', renderTest);

const btnLiterature = document.getElementById('literature');
btnLiterature.addEventListener('click', renderTest);

const btnArchitecture = document.getElementById('architecture');
btnArchitecture.addEventListener('click', renderTest);

const btnNature = document.getElementById('nature');
btnNature.addEventListener('click', renderTest);

const btnSociety = document.getElementById('society');
btnSociety.addEventListener('click', renderTest);

const btnHistory = document.getElementById('history');
btnHistory.addEventListener('click', renderTest);


const btnGeography = document.getElementById('geography');
btnGeography.addEventListener('click', renderTest);
}
