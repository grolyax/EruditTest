const template = `
<div class="login-form">
                <div class="photo-sequence">
                    <img class="imagesLine" src="/pictures/imagesMain/geography.jpg" height="108px" width="auto" alt="geography">
                    <img class="imagesLine" src="/pictures/imagesMain/nature.jpg" height="108px" width="auto" alt="nature">
                    <img class="imagesLine" src="/pictures/imagesMain/history.jpg" height="108px" width="auto" alt="history">
                    <img class="imagesLine" src="/pictures/imagesMain/old-clockwork.jpg" height="108px" width="auto" alt="old-clockwork">
                </div>
                <form>
                    <label>Логин</label>
                    <input name="user" placeholder="Введите Ваш электронный адрес" />
                    <span class="error"></span>
        
                    <label id="login">Пароль</label>
                    <input name="password" type="password" placeholder="Введите свой пароль"/>
                    <span class="error"></span>
        
                    <button class="button-login" type="submit">Войти</button>
                    <p id="link-registration">У Вас нет аккаунта? <a href="/registration">Зарегистрируйтесь</a></p>
                </form>
            </div>
`;

export default template;