import userList from '../users.js';
import storageService from '../storage-service.js';
import { navigateToUrl } from '../routing.js';
import { generateId } from '../utils.js';
import currentUser from '../current-user.js';
import { checkIfHasErrors } from '../utils.js';
import { showErrors } from '../utils.js';

const EMAIL_REGEX = /\S+@\S+\.\S+/; //регулярное выражение для проверки, емэйла
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

function validateRegistration({ email, password, repeatPassword }) {
    let errors = {
        email: [],
        password: [],
        repeatPassword: []
    };

    if (!email) {
        errors = { ...errors, email: [...errors.email, 'Введите адрес электронной почты'] }; 
    }

    if (email && !EMAIL_REGEX.test(email)) {
        errors = { ...errors, email: [...errors.email, 'Email неверного формата'] };
    }

    if (!password) { 
        errors = { ...errors, password: [...errors.password, 'Введите пароль'] };
    }

    if (password && password.length < MIN_PASSWORD_LENGTH) {
         errors = { ...errors, password: [...errors.password, `Пароль должен содержать не менее ${MIN_PASSWORD_LENGTH} символов`] };
    }

    if (password && !PASSWORD_REGEX.test(password)) {
         errors = {
            ...errors,
            password: [...errors.password, 'Пароль неверного формата']
        };
    }

    if (password !== repeatPassword) {
         errors = {
            ...errors,
            repeatPassword: [...errors.repeatPassword, 'Пароль не совпадает с предыдущим']
        };
    }

    return errors;
}


export default function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');


    const errors = validateRegistration({ email, password, repeatPassword });
    
    showErrors(errors);

    const hasErrors = checkIfHasErrors(errors);

    if (hasErrors) {
        return;
    }

    const hashedPassword = CryptoJS.SHA3(password);

    const newUser = {
        id: generateId(userList.users),
        email,
        password: hashedPassword.toString(),
        score: {history: 0, literature: 0, geography: 0, architecture: 0, nature: 0, society: 0, technique: 0, politics: 0,}, 
    };
    

    try {
        userList.add(newUser);
        currentUser.login(newUser);

        storageService.set('users', JSON.stringify(userList.users));
        storageService.set('currentUser', JSON.stringify(currentUser.userData));

        navigateToUrl('/');
    } catch (error) {
        alert(error.message);
    };
}