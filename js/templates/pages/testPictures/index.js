const TestPicturesTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                        <span class="number__question"></span>
                        <span class="thems__test"></span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question"></li>
                        <ol class="test__answer">
                            <li class="value1"> 
                                <input type="radio" name="answer" value="value1">
                                </li>
                            <li class="value2">
                                <input type="radio" name="answer" value="value2" class="checked">
                                </li>
                            <li class="value3">
                                <input type="radio" name="answer" value="value3">
                                </li>
                            <li class="value4">
                                <input type="radio" name="answer" value="value4">
                                </li>
                        </ol>
                    </ol>
                    <div class="footer"></div>
                </form>
            </div>
`;

export default TestPicturesTemplate;