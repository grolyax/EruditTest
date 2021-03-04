const imgQuiz = [
    {
        question: 'Этот политический деятель написал более 500 картин, 50 из которых были выставлены на профессиональном уровне. Пикассо говорил, что политик мог бы выбрать искусство в качестве карьеры. Как зовут этого человека?',
        values: [
            './picture/imagesHistory/0/churchill.jpeg',
            './picture/imagesHistory/0/gitler.jpeg',
            './picture/imagesHistory/0/roosevelt.jpeg',
            './picture/imagesHistory/0/goll.jpeg',
        ],
        trueValue: 0  
    },
    {
        question: 'Какая картина выполнена Иеронимом Босхом?',
        values: [
            './picture/imagesHistory/1/небосх.jpeg',
            './picture/imagesHistory/1/босх.jpeg',
            './picture/imagesHistory/1/небосх.jpeg',
            './picture/imagesHistory/1/небосх.jpeg',
        ],
        trueValue: 1  
    },
    {
        question: 'Какая картина отображает события "Ледового побоища"?',
        values: [
            './picture/imagesHistory/2/неледовое.jpeg',
            './picture/imagesHistory/2/неледовое.jpeg',
            './picture/imagesHistory/2/ледовое.jpeg',
            './picture/imagesHistory/2/неледовое.jpeg',
        ],
        trueValue: 2  
    },
    {
        question: 'Кто сказал: «Принцип «око за око» сделает весь мир слепым»?',
        values: [
            './picture/imagesHistory/3/неганди.jpeg',
            './picture/imagesHistory/3/неганди.jpeg',
            './picture/imagesHistory/3/неганди.jpeg',
            './picture/imagesHistory/3/ганди.jpeg',
        ],
        trueValue: 3  
    },
    {
        question: 'Кто получил прозвище «бабушка Европы»?',
        values: [
            './picture/imagesHistory/4/виктория.jpeg',
            './picture/imagesHistory/4/невиктория.jpeg',
            './picture/imagesHistory/4/невиктория.jpeg',
            './picture/imagesHistory/4/невиктория.jpeg',
        ],
        trueValue: 0  
    },
    {
        question: 'Кто получил прозвище «Беспокойный Теодор»?',
        values: [
            './picture/imagesHistory/5/не.jpeg',
            './picture/imagesHistory/5/рузвельт.jpeg',
            './picture/imagesHistory/5/не.jpeg',
            './picture/imagesHistory/5/не.jpeg',
        ],
        trueValue: 1  
    },
    {
        question: 'Кому принадлежит фраза «Атомная бомба - бумажный тигр...»?',
        values: [
            './picture/imagesHistory/6/не.jpeg',
            './picture/imagesHistory/6/не.jpeg',
            './picture/imagesHistory/6/не.jpeg',
            './picture/imagesHistory/6/маоjpeg',
        ],
        trueValue: 3  
    }
]

/* 
let src = 'http://habrastorage.org/getpro/toster/6ec5a678/f246/4a66/6ec5a678-f246-4a66-93aa-9d23a154c62c/gruffi.gif';
document.getElementById('click').onclick = function() {
    document.getElementById('user-avatar').src = src;
} */



// var img = document.createElement("IMG");
// img.src = "upload/medialibrary/e60/e605f52693f032eb03f46ffde79ef5bf.jpg";

// test.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\">";
/*
 answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
*/
               