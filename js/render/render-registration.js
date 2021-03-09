import registrationTemplate from '../templates/pages/registration/index.js';
import registerUser from '../auth/register-user.js';

export default function renderRegistration() {
    const rootDiv = document.querySelector('.container');
    rootDiv.innerHTML = registrationTemplate;
    
    const registrationForm = document.querySelector('.registration-form > form');
    registrationForm.addEventListener('submit', registerUser);
}