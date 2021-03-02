export function getListIdByUrl() {
    const currentUrl = window.location.pathname;

    const splittedCyrrentUrl = currentUrl.split('/');

    return parseInt(splittedCyrrentUrl[splittedCyrrentUrl.length - 1], 10);
} 
