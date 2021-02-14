const registrationTemplate = `
<div class="registration-form">
<div class="photo-sequence">
    <img class="imagesLine" src="/pictures/imagesMain/geography.jpg" height="108px" width="auto" alt="geography">
    <img class="imagesLine" src="/pictures/imagesMain/nature.jpg" height="108px" width="auto" alt="nature">
    <img class="imagesLine" src="/pictures/imagesMain/history.jpg" height="108px" width="auto" alt="history">
    <img class="imagesLine" src="/pictures/imagesMain/old-clockwork.jpg" height="108px" width="auto" alt="old-clockwork">
</div>
<form>
    <label>Логин</label>
    <input name="email" placeholder="Введите Ваш электронный адрес" />
    <span class="error"></span>

    <label>Пароль</label>
    <input name="password" type="password" placeholder="Не менее 8 символов, используйте цифры и буквы"/>
    <span class="error"></span>

    <label>Повторите пароль</label>
    <input name="repeatPassword" type="password" />
    <span class="error"></span>

    <button class="button-registration" type="submit">Зарегистрироваться</button> 
    <hr>
    <p id="link-login">У Вас есть аккаунт? <a href="/login">Войдите</a></p>
</form>
</div>
`;

export default registrationTemplate;