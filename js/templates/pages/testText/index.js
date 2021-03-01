const TestTextTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                        <span class="number__question">Вопрос 1 из 10  </span>
                        <span class="thems__test">Политика</span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question">В какой из перечисленных стран нет должности Президента?</li>
                        <ol class="test__answer__text">
                            <li > 
                                <input type="radio" name="answer" value="a1">
                                <div class="box__answer"><p  class="text__answer" >Бельгия</p></div>
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a2">
                                <div class="box__answer"><p  class="text__answer">Франция</p></div>
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a3" >
                                <div class="box__answer"><p class="text__answer">Германия</p></div>
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a4">
                                <div class="box__answer"><p class="text__answer">Португалия</p></div>
                            </li>
                        </ol>
                    </ol>
                    <p class="progress__bar"></p>
                    <div class="navigator">
                        <a href="#"><i class="fas fa-chevron-left"></i>Назад</a>
                        <button type="submit" class="accept">Принять ответ</button>
                        <a href="#">Вперёд<i class="fas fa-chevron-right"></i></a>
                    </div>
                </form>
            </div>
`;
export default TestTextTemplate;