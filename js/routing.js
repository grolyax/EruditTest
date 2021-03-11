import renderTestsList from './render/render-list-of-test.js';
import renderLogin from './render/render-login.js';
import renderRegistration from './render/render-registration.js';
import currentUser from './current-user.js';
import renderMainStart from './render/renderMainStart.js';
import renderNextStartTrue from './render/renderAnswerTrue.js';
import renderNextStartFalse from './render/renderAnswerFalse.js';
import renderTest from './render/renderTest.js';
import renderResultTest from './render/render-result-test.js';
import renderMainPersonal from './render/render-main-personal.js';

const listRoutePattern = /^\/list\/\d+$/;
const INDEX_URLS = ['/', '/index.html'];
const REGISTRATION_URL = '/registration';
const LOGIN_URL = '/login';
const STARTTRUE_URL = '/mainStartNextTrue';
const STARTFALSE_URL = '/mainStartNextFalse';
const RESULT_TEST_URL = '/resultTest';
const LIST_OFTEST_URL = '/listOfTests'; // проверочный - потом  исправить
const TEST_URL = '/test';
const PERSONAL__URL = '/mainPersonal';

export function renderPage() {
  const { pathname: currentUrl } = window.location;

  if (INDEX_URLS.includes(currentUrl)) {
    if (currentUser.userData !== null) {
      renderMainPersonal();
    } else {
      renderMainStart();
    }

    return;
  }

  if (currentUrl === STARTTRUE_URL) {
    if (currentUser.userData !== null) {
      renderMainPersonal();
    } else {
      renderNextStartTrue();
    }
    return;
  }

  if (currentUrl === STARTFALSE_URL) {
    if (currentUser.userData !== null) {
      renderMainPersonal();
    } else {
      renderNextStartFalse();
    }
    return;
  }

  if (currentUrl === REGISTRATION_URL) { // можно упростить вынести одинаковые проверки (!currentUser.userData && currentUrl === REGISTRATION_URL), тогда if  уже не нужен - ушёл сюда, а только navigateToUrl('/') поставить в самом конце, чтоб было для null
    if (currentUser.userData !== null) { // здесь могла бы быть или запись (!currentUser.userData) - это тоже самое
      navigateToUrl('/');
    } else {
      renderRegistration();
    }

    return;
  }

  if (currentUrl === LOGIN_URL) { // можно упростить вынести одинаковые проверки (!currentUser.userData && currentUrl === LOGIN_URL)
    if (currentUser.userData !== null) {  // здесь могла бы быть или запись (!currentUser.userData) - это тоже самое
      navigateToUrl('/');
    } else {
      renderLogin();
    }

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl('/');

    return;
  }

  if (currentUrl === LIST_OFTEST_URL) { 
    renderTestsList();

    return
  }

  if (currentUrl === TEST_URL) { 
    renderTest();

    return
  }

  if (currentUrl === PERSONAL__URL) { 
    renderMainPersonal();

    return
  }

  if (currentUrl === RESULT_TEST_URL) { 
    renderResultTest();

    const RepeatTest = document.getElementById('repeat')
    RepeatTest.addEventListener('submit', renderTest);
    return
  }

  /*
    if (listRoutePattern.test(currentUrl)) {
      const listId = getListIdByUrl();
  
      const list = lists.getListById(listId);
  
      if (list.userId !== currentUser.userData.id) {
        navigateToUrl('/');
      } else {
  
        renderList();
      }
  
    } */
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url); // добавили новое состояние в историю браузера

  renderPage();
}


// используем эту функцию после каждого рендера, чтобы переписать поведение для появившихся на странице ссылок
export const replaceLinksBehavior = () => {
  const linkArray = Array.from(document.querySelectorAll('a')); // ищем все элементы ссылок на странице

  linkArray.forEach(link => {
      link.removeEventListener('click', linkBehaviorCallback); // удаляем ивент лисенеры, потому что если ивент лисенеры не удалять, то они накапливаются на одних и тех же элементах и перегружают страницу, всё начинает тормозить.
      link.addEventListener('click', linkBehaviorCallback);
  })
}

const linkBehaviorCallback = (event) => {
  event.preventDefault(); // блокируем стандартный переход по ссылке, чтобы страница не перезагружалась
  const linkElement = event.target.closest('a'); // если клик произошел не на сам <a> а на какой-то элемент внутри этого <a> например <p>География</p>
  navigateToUrl(linkElement.href.match(':\/\/.+(?<href>\/.*)').groups.href); // регулярное выражение для отеделения последней части url. Пример: "http://127.0.0.1:5501/login" -> "/login"
}