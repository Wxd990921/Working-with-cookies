'use strict';
import browsers from './browsers.js';

let tips = document.querySelector('.tips');
let btn = document.querySelector('.accept');
let btn2 = document.querySelector('.set')
let cookie = document.querySelector('.cookie');
let settings = document.querySelector('.settings');
let save = document.querySelector('.save');
let switchButton = document.querySelector('#switchButton');
let switchButton2 = document.querySelector('#switchButton2');
let switchButton3 = document.querySelector('#switchButton3');
let switchButton4 = document.querySelector('#switchButton4');

const getBrowserInfo = () => {

    const { userAgent } = navigator;

    const browserInfo = browsers.find(({ identifier }) => userAgent.includes(identifier));

    const browserVersion = browserInfo.getVersion(userAgent);


    return {

        browserName: browserInfo.name,

        browserVersion

    };

};

const navi = {
    os: `${navigator.userAgent}`,
    width: `${window.screen.width}px`,
    height: `${window.screen.height}px`,
    browser: getBrowserInfo().browserName,
}

function printCookies() {
    if (document.cookie) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            console.log(
                decodeURIComponent(cookies[i].split('=')[0] + ':' +
                    decodeURIComponent(cookies[i].split('=')[1]))
            );
            tips.style.filter = 'blur(0px)';
        }
    } else {
        console.log('Cookies not available');
        cookie.style.visibility = 'visible';
    }
}
printCookies();


function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        SameSite: 'Lax',
        ...options
    };

    const keys = Object.keys(options);
    const values = Object.values(options);

    if (options?.expires && options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updateCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    for (let i = 0; i < keys.length; i++) {
        updateCookie += `;${keys[i]}=${values[i]}`;
    }
    document.cookie = updateCookie;
}

const date = new Date();
date.setSeconds(date.getSeconds() + 5);

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    //matches[0] contains the whole string we used
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

btn.addEventListener('click', function () {
    cookie.style.visibility = 'hidden';
    tips.style.filter = 'blur(0px)';
    setCookie('Browser', `${navi.browser}`, { 'max-age': 15 });
    setCookie('OS', `${navi.os}`, { 'max-age': 15 });
    setCookie('Width', `${navi.width}`, { 'max-age': 15 });
    setCookie('Height', `${navi.height}`, { 'max-age': 15 });
});

btn2.addEventListener('click', function () {
    cookie.style.visibility = 'hidden';
    settings.style.visibility = 'visible';

});

save.addEventListener('click', function () {
    if (switchButton.checked) {
        setCookie('Browser', `${navi.browser}`, { 'max-age': 15 });
    } else {
        setCookie('User', `refuse`, { 'max-age': 15 });
    }

    if (switchButton2.checked) {
        setCookie('OS', `${navi.os}`, { 'max-age': 15 });
    } else {
        setCookie('User', `refuse`, { 'max-age': 15 });
    }

    if (switchButton3.checked) {
        setCookie('Width', `${navi.width}`, { 'max-age': 15 });
    } else {
        setCookie('User', `refuse`, { 'max-age': 15 });
    }

    if (switchButton4.checked) {
        setCookie('Height', `${navi.height}`, { 'max-age': 51 });
    } else {
        setCookie('User', `refuse`, { 'max-age': 15 });
    }

    settings.style.visibility = 'hidden';
    tips.style.filter = 'blur(0px)';
});



















