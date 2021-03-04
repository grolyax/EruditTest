const TestTextTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                        <span class="number__question"></span>
                        <span class="thems__test"></span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question"></li>
                        <ol class="test__answer__text">
                            <li class="value1"> 
                                <input type="radio" name="answer" value="value1">
                                <div class="box__answer"><p  class="text__answer"></p></div>
                            </li>
                            <li class="value2">
                                <input type="radio" name="answer" value="value2">
                                <div class="box__answer"><p  class="text__answer"></p></div>
                            </li>
                            <li class="value3">
                                <input type="radio" name="answer" value="value3" >
                                <div class="box__answer"><p class="text__answer"></p></div>
                            </li>
                            <li class="value4">
                                <input type="radio" name="answer" value="value4">
                                <div class="box__answer"><p class="text__answer"></p></div>
                            </li>
                        </ol>
                    </ol>
                    <p class="progress__bar"></p>
                    <div class="navigator">
                        <button class="navigation back"><i class="fas fa-chevron-left"></i>Назад</button>
                        <button type="submit" class="accept">Принять ответ</button>
                        <button class="navigation forth">Вперёд<i class="fas fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
`;
export default TestTextTemplate;