const TestPicturesTemplate = `
<div class="test__form">
                <form>
                    <div class="task__test">
                        <span class="number__question">Вопрос 1 из 10  </span>
                        <span class="thems__test">Architecture</span>
                    </div>
                    <ol class="theme__question">
                        <li class="test__question"></li>
                        <ol class="test__answer">
                            <li > 
                                <input type="radio" name="answer" value="a1">
                                <img src="./pictures/imagesArchitecture/1/mavzoley.png" width="180px" height="120px">
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a2" class="checked">
                                <img src="./pictures/imagesArchitecture/1/Tadzh-Mahal.png" width="180px" height="120px">
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a3">
                                <img src="./pictures/imagesArchitecture/1/pyramida.png" width="180px" height="120px">
                            </li>
                            <li>
                                <input type="radio" name="answer" value="a4">
                                <img src="./pictures/imagesArchitecture/1/lenin.jpg" width="180px" height="120px">
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

export default TestPicturesTemplate;