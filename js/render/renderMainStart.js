
import mainStartTemplate from '../templates/pages/mainStart/index.js';
import headerAccountTemplate from '../templates/pages/headerAccount/index.js';
//import renderStartTest from './renderStartTest.js';



const startQuiz = [
    {
        question: 'Шахматы и политика "Жертва ради победы" ',
        values: [
            'Рокировка',
            'Гамбит',
            'Цугцванг',
            'Блокада',
        ],
        trueValue: 1
    },
    {
        question: 'Кто сказал фразу "Лошадью ходи!"?',
        values: [
            'Доцент',
            'Хмырь',
            'Али - Баба',
            'Косой',
        ],
        trueValue: 3
    },
    {
        question: 'Кто назвал мир "шахматной доской"?',
        values: [
            'Муссолини',
            'Рейган',
            'Бжезинский',
            'Макиавелли',
        ],
        trueValue: 2
    },
];

function renderStartTest() {
    
    let indexOfQuestion;

    let randomNumber = Math.floor(Math.random() * startQuiz.length);
    indexOfQuestion = randomNumber;
    

    const question = document.getElementById('question');


    const value1 = document.querySelector('.value1'),
        value2 = document.querySelector('.value2'),
        value3 = document.querySelector('.value3'),
        value4 = document.querySelector('.value4');

   

    question.innerHTML = startQuiz[indexOfQuestion].question;
    value1.innerHTML = startQuiz[indexOfQuestion].values[0];
    value2.innerHTML = startQuiz[indexOfQuestion].values[1];
    value3.innerHTML = startQuiz[indexOfQuestion].values[2];
    value4.innerHTML = startQuiz[indexOfQuestion].values[3];


};

const valueElements = document.querySelectorAll('.button__value');


export default function renderMainStart() {
    const rootDiv = document.querySelector('.container');
    const headerDiv = document.querySelector('.account');

    headerDiv.innerHTML = headerAccountTemplate;
    rootDiv.innerHTML = mainStartTemplate;

    renderStartTest(startQuiz);
}



