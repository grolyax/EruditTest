const resultTestTemplate = `
<div class="questions__count">
    <p class="questions__tracker"></p>
    <p class="thems__test"></p>
</div>
    <p class="test__result">Ваш результат: <span id="score"></span> из 20. Хотите попробовать ещё?</p>
    <div class="button-tests">
        <a href="" id="repeat" class="button-test button">Пройти тест ещё раз</a>
        <a href="/listOfTests" class="button-new-test button">Выбор тестов</a>
    </div>

    <table class="records__test">
        <tr class="table__title">
            <th class="table__order">№</th>
            <th class="table__name">Имя</th>
            <th class="table__offset">Ответы правильные</th>
            <th class="table__failure">Ответы неправильные</th
        </tr>
    </table>
    `;
export default resultTestTemplate;
