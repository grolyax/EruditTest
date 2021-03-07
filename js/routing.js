import renderTestsList from './render/render-list-of-test.js';
import renderLogin from './render/render-login.js';
import renderRegistration from './render/render-registration.js';
import { getListIdByUrl } from './utils/getListByUrl.js';
import currentUser from './current-user.js';
import renderMainStart from './render/renderMainStart.js';
import renderNextStartTrue from './render/renderAnswerTrue.js';
import renderNextStartFalse from './render/renderAnswerFalse.js';
import renderTest from './render/renderTest.js';
import renderResultTest from './render/render-result-test.js';
//import renderMainPersonal from '';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/', '/index.html']; 

const REGISTRATION_URL = '/registration';
const LOGIN_URL = '/login';
const STARTTRUE_URL = '/mainStartNextTrue';
const STARTFALSE_URL = '/mainStartNextFalse';
const RESULT_TEST_URL = '/resultTest';
const LIST_OFTEST_URL = '/listOfTests'; // проверочный - потом  исправить
const TEST_URL = '/test';

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

    if (currentUrl === LIST_OFTEST_URL) { //временно, потом добавить условие, что только для вошедших в аккаунт
      renderTestsList();

      return
    }
    if (currentUrl === RESULT_TEST_URL) { //временно, потом добавить условие, что только для вошедших в аккаунт
    renderResultTest();

    return
  }

    if (currentUrl === TEST_URL) { //временно, потом расставить по темам и на страницу рендера списка
      renderTest();

      return
    }

    if (currentUrl === STARTTRUE_URL) {
      renderNextStartTrue();
      
    return;
    }

    if (currentUrl === STARTFALSE_URL) {
      renderNextStartFalse();

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
      navigateToUrl(LOGIN_URL);
  
      return;
    } 
  
  
    if (INDEX_URLS.includes(currentUrl)) {
        renderTestsList();
  
      return;
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