const personAreaTemplate = `
<h2 id="my-records">Ваши рекорды</h2>
            <table class="records">
                <tr class="table-title">
                    <th class="table-title-thems">Темы</th>
                    <th class="table-points">Баллы</th>
                    <th class="th table-date">Дата</th>
                   </tr>
                   <tr>
                    <th class="table-thems">География</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Природа</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Политика</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Общество</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">История</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Литература</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Архитектура</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
                  <tr>
                    <th class="table-thems">Техника</th>
                    <th class="table-points"></th>
                    <th class="table-date"></th>
                  </tr>
            </table>
            <div class="button-tests">
                <button class="button-test" type="submit">Пройти тест</button>
                <button class="button-new-test" type="submit">Создать свой тест</button>
            </div>
`;

export default personAreaTemplate;