const TestTextTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                        <p class="questions__tracker">Вопрос <span id="number__question"></span> из 20.</p>
                        <span class="thems__test"></span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question"></li>
                        <ol class="test__answer__text">
                            <li class="value1"> 
                                <input type="radio" id="input__answer1" name="answer">
                                <label for="input__answer1" class="box__answer answer1"></label>
                            </li>
                            <li class="value2">
                                <input type="radio" id="input__answer2" name="answer">
                                <label for="input__answer2" class="box__answer answer2"></label>
                            </li>
                            <li class="value3">
                                <input type="radio" id="input__answer3" name="answer">
                                <label for="input__answer3" class="box__answer answer3"></label>
                            </li>
                            <li class="value4">
                                <input type="radio" id="input__answer4" name="answer">
                                <label for="input__answer4" class="box__answer answer4"></label>
                            </li>
                        </ol>
                    </ol>
                    <div class="footer"></div>
                </form>
            </div>
`;
export default TestTextTemplate;