const xhr = new XMLHttpRequest();

const fileSource = {
    dashbord: 'pages/dashboard.html',
    setting: 'pages/setting.html',
    help: 'pages/help.html',
    aboutUs: 'pages/aboutUs.html',
};

// DOM elements
const msg = document.querySelector('#msg');
const fileCatcher = document.querySelector('#file-catcher');

// catch file slide
function changeSlide(targ) {
    xhr.open('GET', targ, true);

    xhr.onload = function () {
        if (xhr.status !== 200)
            return (msg.textContent = 'Something Went wrong!');

        if (xhr.status === 200) return (fileCatcher.innerHTML = xhr.response);
    };

    xhr.send();
}

// set targ
fileCatcher.addEventListener('click', e => {
    if (e.target.classList.contains('btn-act')) {
        if (e.target.textContent.includes('Setting')) {
            changeSlide(fileSource.setting);
        } else if (e.target.textContent.includes('Help')) {
            changeSlide(fileSource.help);
        } else if (e.target.textContent.includes('About us')) {
            changeSlide(fileSource.aboutUs);
        }
    }
});

// catching dashboard
changeSlide(fileSource.dashbord);
