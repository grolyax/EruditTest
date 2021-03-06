const TestPicturesTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                    <p class="questions__tracker">Вопрос <span id="number__question"></span> из 20.</p>
                        <span class="thems__test"></span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question"></li>
                        <ol class="test__answer">
                            <li class="value1"> 
                                <input type="radio" id="input__answer1" name="answer" value="value1">
                                <label for="input__answer1"><img src="" class="img__value1" height="120" width="auto"></label>
                                </li>
                            <li class="value2">
                                <input type="radio" id="input__answer2" name="answer" value="value2" class="checked">
                                <label for="input__answer2"><img src="" class="img__value2" height="120" width="auto"></label>
                                </li>
                            <li class="value3">
                                <input type="radio" id="input__answer3" name="answer" value="value3">
                                <label for="input__answer3"><img src="" class="img__value3" height="120" width="auto"></label>
                                </li>
                            <li class="value4">
                                <input type="radio" id="input__answer4" name="answer" value="value4">
                                <label for="input__answer4"><img src="" class="img__value4" height="120" width="auto"></label>
                                </li>
                        </ol>
                    </ol>
                    <div class="footer"></div>
                </form>
            </div>
`;

export default TestPicturesTemplate;