let xhr = new XMLHttpRequest();
let resume = new XMLHttpRequest();

// SOURCES
const sources = [
    'formats and forms/format 1/form1.html',
    'formats and forms/format 1/form2.html',
    'formats and forms/format 1/form3.html',
    'formats and forms/format 1/form4.html',
    'formats and forms/format 1/form5.html',
    'formats and forms/format 1/form6.html',
    'formats and forms/format 1/form7.html',
    'formats and forms/format 1/loadFile.html', //load html file
];

// Form Messages
const message = [
    'First, intoduce you self😊',
    'Now, tell us what you located😉',
    'How can we contact you?🤷‍♂️',
    'Personal Information😎',
    'Work Experience 👮‍♀️',
    'Educational Attaiment 👨‍🎓',
    'And lastly. Give a person who can tell about your characteristics',
    'Please Wait!',
];
const resumeFormatSrc = 'formats and forms/format 1/format1.html';

// FORM COUNT
let formCount = -1;

// DOM ELEMENTS
const formCatcher = document.querySelector('#form-catcher');
const btnContainer = document.querySelector('.btn-act');
btnContainer.style.display = 'none';
const nxtBtn = document.querySelector('#nxt-btn');
const msg = document.querySelector('#msg');
const resumeCatcher = document.querySelector('#resume-format');

// EVENTS
nxtBtn.addEventListener('click', nxt);

// loading 5s loading
function loadOutput() {
    btnContainer.remove();
    const loadMsg = document.querySelector('.loading-container');

    setInterval(() => loadMsg.classList.toggle('load-toggle'), 750);
    setTimeout(() => {
        const resumeMsg = document.querySelector('#resume-msg');
        const flexer = document.querySelector('.flexer');
        const wholeForm = document.querySelector('#whole-form');
        const resume = document.querySelector('#resume');
        const targ = resume.offsetTop;

        console.log(targ);
        window.scrollTo(0, targ);
        resumeMsg.textContent = 'Your Resume Has Been Doned 🎉';
        resumeCatcher.style.fontSize = '15px';
        resume.style.height = '11.69in';
        resume.style.width = '8.27in';
        flexer.style.justifyContent = 'center';
        wholeForm.remove();
    }, 5000);
}

// Getting input and Outputting to format
function inputs(form) {
    if (form === 0) {
        const firstName = document.querySelector('#first-name');
        const lastName = document.querySelector('#last-name');
        const middleName = document.querySelector('#middle-name');

        nxtBtn.addEventListener('click', () => {
            const outputFname = document.querySelector('#first-name-output');
            const outputmName = document.querySelector('#middle-name-output');
            const outputlName = document.querySelector('#last-name-output');
            const bottomFullName = document.querySelector('#bottom-fName');

            outputmName.textContent = middleName.value;
            outputFname.textContent = firstName.value;
            outputlName.textContent = lastName.value;
            bottomFullName.textContent = `${firstName.value}, ${lastName.value}, ${middleName.value}`;
        });
    } else if (form === 1) {
        const brgy = document.querySelector('#brgy-input');
        const municipal = document.querySelector('#municipal-input');
        const province = document.querySelector('#province-input');

        nxtBtn.addEventListener('click', () => {
            const addressOutput = document.querySelector('#address-output');
            addressOutput.textContent = `${brgy.value}, ${municipal.value}, ${province.value}`;
        });
    } else if (form === 2) {
        const mobileNumb = document.querySelector('#mobile-number-output');
        const email = document.querySelector('#email-output');

        nxtBtn.addEventListener('click', () => {
            const emailOutput = document.querySelector('#contact-output');
            emailOutput.textContent = `${mobileNumb.value}, ${email.value}`;
        });
    } else if (form === 3) {
        const DOBoutput = document.querySelector('#DOB-output');
        const POBoutput = document.querySelector('#POB-output');
        const heightOutput = document.querySelector('#height-output');
        const weightOutput = document.querySelector('#weight-output');
        const religionOutput = document.querySelector('#religion-output');
        const citizenshipOutput = document.querySelector('#citizenship-output');
        const CSOutput = document.querySelector('#CS-output');

        nxtBtn.addEventListener('click', () => {
            const DOB = document.querySelector('#DOB');
            const POB = document.querySelector('#POB');
            const height = document.querySelector('#height');
            const weight = document.querySelector('#weight');
            const religion = document.querySelector('#religion');
            const citizenship = document.querySelector('#citizenship');
            const CS = document.querySelector('#CS');
            DOB.textContent = DOBoutput.value;
            POB.textContent = POBoutput.value;
            height.textContent = heightOutput.value;
            weight.textContent = weightOutput.value;
            religion.textContent = religionOutput.value;
            citizenship.textContent = citizenshipOutput.value;
            CS.textContent = CSOutput.value;
        });
    } else if (form === 4) {
        const cName = document.querySelector('#Cname');
        const jTitle = document.querySelector('#jTitle');
        const yFrom = document.querySelector('#yFrom');
        const yEnded = document.querySelector('#yEnded');
        nxtBtn.addEventListener('click', () => {
            const cNameOutput = document.querySelector('#cName-output');
            const jTitleOutput = document.querySelector('#jTitle-output');
            const yTOutput = document.querySelector('#from-to-output');

            cNameOutput.textContent = cName.value;
            jTitleOutput.textContent = jTitle.value;
            yTOutput.textContent = `${yFrom.value}-${yEnded.value}`;
        });
    } else if (form === 5) {
        // inputs
        // secondary
        const secondarySname = document.querySelector('#secondary-sName');
        const secondarySaddress = document.querySelector('#secondary-Saddress');
        const secondaryYfrom = document.querySelector('#secondary-Yfrom');
        const secondaryYended = document.querySelector('#secondary-Yended');

        // Elementary
        const elementarySname = document.querySelector('#elementary-sName');
        const elementarySaddress = document.querySelector(
            '#elementary-Saddress'
        );
        const elementaryYfrom = document.querySelector('#elementary-Yfrom');
        const elementaryYended = document.querySelector('#elementary-Yended');
        nxtBtn.addEventListener('click', () => {
            // Outputs
            // secondary
            const secondarySnameOutput = document.querySelector(
                '#secondary-sName-output'
            );
            const secondarySaddressOuput = document.querySelector(
                '#secondary-Saddress-output'
            );
            const secondaryYFromYendedOutput = document.querySelector(
                '#secondary-from-to-output'
            );

            secondarySnameOutput.textContent = secondarySname.value;
            secondarySaddressOuput.textContent = secondarySaddress.value;
            secondaryYFromYendedOutput.textContent = `${secondaryYfrom.value}-${secondaryYended.value}`;
            // Elementary
            const elementarySnameOutput = document.querySelector(
                '#elementary-sName-output'
            );
            const elementarySaddressOuput = document.querySelector(
                '#elementary-Saddress-output'
            );
            const elementaryYFromYendedOutput = document.querySelector(
                '#elementary-from-to-output'
            );

            elementarySnameOutput.textContent = elementarySname.value;
            elementarySaddressOuput.textContent = elementarySaddress.value;
            elementaryYFromYendedOutput.textContent = `${elementaryYfrom.value}-${elementaryYended.value}`;
        });
    } else if (form === 6) {
        // inputs
        const refFName = document.querySelector('#ref-first-name');
        const refJTitle = document.querySelector('#ref-job-title');
        const refCName = document.querySelector('#ref-company-name');

        nxtBtn.addEventListener('click', () => {
            // outputs
            const refFNameOutput = document.querySelector(
                '#ref-first-name-output'
            );
            const refJTitleOutput = document.querySelector(
                '#ref-job-title-output'
            );
            const refCNameOutput = document.querySelector(
                '#ref-company-name-output'
            );

            refFNameOutput.textContent = refFName.value;
            refJTitleOutput.textContent = refJTitle.value;
            refCNameOutput.textContent = refCName.value;
        });
    }
}
// CHANGING FORMS
function nxtForm() {
    formCount++;
    const stage = () => {
        if (formCount >= sources.length) {
            return (total = sources.length - 1);
        } else {
            return formCount;
        }
    };
    getFirstForm(stage());
}

// CATHCHING SOURCES
function getFirstForm(form) {
    xhr.open('GET', sources[form], true);

    if (xhr.readyState < 4) {
        formCatcher.innerHTML = 'Please Wait!';
    }
    xhr.onload = function () {
        if (xhr.status === 200) {
            msg.textContent = message[form];
            formCatcher.innerHTML = xhr.response;
            btnContainer.style.display = 'block';
            inputs(form);
            if (
                form ===
                sources.indexOf('formats and forms/format 1/loadFile.html')
            ) {
                loadOutput();
            }
        } else {
            formCatcher.innerHTML = 'Something went wrong!';
        }
    };
    xhr.send();
}
// CATCHING RESUME FORMAT
resume.open('GET', resumeFormatSrc, true);
if (resume.readyState < 4) {
    resumeCatcher.innerHTML = 'Please wait!';
}
resume.onload = function () {
    resumeCatcher.innerHTML = resume.response;
};
resume.send();

// CATCHING BTN EVENT
function nxt() {
    nxtForm();
}
nxt();
