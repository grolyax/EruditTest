import HeaderCurrentUserTemplate from '../templates/pages/headerCurrentUser/index.js';
import logoutUser from '../auth/logout-user.js';
export default function  renderHeaderCurrentUser() {

    const headerDiv = document.querySelector('.account');
    headerDiv.innerHTML = HeaderCurrentUserTemplate;

    const logOut = document.querySelector('.exit');
    logOut.addEventListener('click', logoutUser);
}
