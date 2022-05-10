const xhr = new XMLHttpRequest();
const resume = new XMLHttpRequest();

const sources = [
    'formats and forms/format 2/form1.html',
    'formats and forms/format 2/form2.html',
    'formats and forms/format 2/form8.html',
    'formats and forms/format 2/form3.html',
    'formats and forms/format 2/form4.html',
    'formats and forms/format 2/form5.html',
    'formats and forms/format 2/form6.html',
    'formats and forms/format 2/form7.html',
];
const messages = [
    'First, intoduce you self 😊',
    'Now, tell us what you located 😉',
    'How we will contact you?',
    'Tell us some of your objectives 🎯',
    'Academic Background 🏫',
    'Wrok Experience 👷🏽‍♂️',
    'Enter Your Skills 💪',
    'Please Wait!',
];
let formCount = -1;

//Dom Elements
const formCatcher = document.querySelector('#form-catcher');
const btnContainer = document.querySelector('.btn-act');
btnContainer.style.display = 'none';
const nxtBtn = document.querySelector('#nxt-btn');
const msg = document.querySelector('#msg');
const resumeCatcher = document.querySelector('#resume-format2');
const willRemoved = document.querySelector('#will-remove');

nxtBtn.addEventListener('click', nxtForm);

// Loading Output
function loadOutput() {
    const hasDoned = document.querySelector('#has-doned');
    const loadMsg = document.querySelector('.loading-container');
    const finalOutput = document.querySelector('#final-output');
    nxtBtn.remove();
    setInterval(() => loadMsg.classList.toggle('load-toggle'), 750);
    setTimeout(() => {
        willRemoved.remove();
        const flxer = document.querySelector('.flexer');
        finalOutput.style.height = '11.69in';
        finalOutput.style.width = '8.27in';
        flxer.style.justifyContent = 'center';
        resumeCatcher.style.fontSize = '15px';
        hasDoned.textContent = 'Your resume has been doned 🎉';
        let targ = flxer.offsetTop;
        window.scrollTo(0, targ);
        console.log(targ);
    }, 5000);
}
// take input to Output
function toOutput(form) {
    if (form === 0) {
        // Input
        const firstName = document.querySelector('#first-name');
        const middleName = document.querySelector('#middle-name');
        const lastName = document.querySelector('#last-name');

        nxtBtn.addEventListener('click', () => {
            // Output
            const fullName = document.querySelector('#full-name-output');

            fullName.textContent = `${firstName.value}, ${lastName.value}, ${middleName.value}`;
        });
    } else if (form === 1) {
        // Input
        const brgy = document.querySelector('#brgy-input');
        const municipal = document.querySelector('#municipal-input');
        const province = document.querySelector('#province-input');

        nxtBtn.addEventListener('click', () => {
            // Output
            const address = document.querySelector('#address');

            address.textContent = `${brgy.value}, ${municipal.value}, ${province.value}`;
        });
    } else if (form === 2) {
        // Input
        const emailInput = document.querySelector('#email-input');
        const contactNumber = document.querySelector('#mobile-number-input');

        nxtBtn.addEventListener('click', () => {
            // output
            const emailOutput = document.querySelector('#email');
            const contactNumberOutput =
                document.querySelector('#contact-number');

            emailOutput.textContent = emailInput.value;
            contactNumberOutput.textContent = contactNumber.value;
        });
    } else if (form === 3) {
        // input
        const objectiveInput = document.querySelector('#objective-input');

        // output
        nxtBtn.addEventListener(
            'click',
            () =>
                (document.querySelector('#objective-output').textContent =
                    objectiveInput.value)
        );
    } else if (form === 4) {
        // input

        // Tertiary
        const tertiarySchoolNameInput =
            document.querySelector('#tertiary-SName');
        const tertiarySaddressInput =
            document.querySelector('#tertiary-Saddress');
        const tertiaryYfromInput = document.querySelector('#tertiary-Yfrom');
        const tertiaryYendedInput = document.querySelector('#tertiary-Yended');

        // Secondary
        const secondarySchoolNameInput =
            document.querySelector('#secondary-sName');
        const secondarySaddressInput = document.querySelector(
            '#secondary-Saddress'
        );
        const secondaryYfromInput = document.querySelector('#secondary-Yfrom');
        const secondaryYendedInput =
            document.querySelector('#secondary-Yended');

        // primary
        const elementarySchoolNameInput =
            document.querySelector('#elementary-sName');
        const elementarySaddressInput = document.querySelector(
            '#elementary-Saddress'
        );
        const elementaryYfromInput =
            document.querySelector('#elementary-Yfrom');
        const elementaryYendedInput =
            document.querySelector('#elementary-Yended');

        nxtBtn.addEventListener('click', () => {
            // Output

            // Tertiary
            const tertiarySchoolNameOutput = document.querySelector(
                '#tertiary-SName-output'
            );
            const tertiarySaddressOutput = document.querySelector(
                '#tertiary-Saddress-output'
            );
            const tertiarySYearOutput = document.querySelector(
                '#tertiary-sYear-output'
            );

            // Secondary
            const secondarySchoolNameOutput = document.querySelector(
                '#secondary-SName-output'
            );
            const secondarySaddressOutput = document.querySelector(
                '#secondary-Saddress-output'
            );
            const secondarySYearOutput = document.querySelector(
                '#secondary-sYear-output'
            );

            // Primary
            const primarySchoolNameOutput = document.querySelector(
                '#primary-SName-output'
            );
            const primarySaddressOutput = document.querySelector(
                '#primary-Saddress-output'
            );
            const primarySYearOutput = document.querySelector(
                '#primary-sYear-output'
            );

            // tertiary
            tertiarySchoolNameOutput.textContent =
                tertiarySchoolNameInput.value;
            tertiarySaddressOutput.textContent = tertiarySaddressInput.value;
            tertiarySYearOutput.textContent = `${tertiaryYfromInput.value}-${tertiaryYendedInput.value}`;

            // secondary
            secondarySchoolNameOutput.textContent =
                secondarySchoolNameInput.value;
            secondarySaddressOutput.textContent = secondarySaddressInput.value;
            secondarySYearOutput.textContent = `${secondaryYfromInput.value}-${secondaryYendedInput.value}`;

            // secondary
            primarySchoolNameOutput.textContent =
                elementarySchoolNameInput.value;
            primarySaddressOutput.textContent = elementarySaddressInput.value;
            primarySYearOutput.textContent = `${elementaryYfromInput.value}-${elementaryYendedInput.value}`;
        });
    } else if (form === 5) {
        // input
        const campanyName = document.querySelector('#cName');
        const jobTitle = document.querySelector('#jTitle');
        const jAddress = document.querySelector('#jAddress');
        const from = document.querySelector('#yFrom');
        const ended = document.querySelector('#yEnded');

        nxtBtn.addEventListener('click', () => {
            const companyNameOutput = (document.querySelector(
                '#cName-output'
            ).textContent = campanyName.value);
            const jobTitleOutput = (document.querySelector(
                '#jTitle-output'
            ).textContent = jobTitle.value);
            const jAddressOutput = (document.querySelector(
                '#jAddress-output'
            ).textContent = jAddress.value);
            const fromTo = (document.querySelector(
                '#to-from-output'
            ).textContent = `${from.value}-${ended.value}`);
        });
    } else if (form === 6) {
        // input
        const skills = document.querySelector('#skills');
        // Output
        const skillCatcher = document.querySelector('#skill-list');
        nxtBtn.addEventListener('click', () => {
            const skillList = skills.children;

            for (i = 0; i < skillList.length; i++) {
                const skillsInput = skillList[i].firstElementChild.value;
                const li = document.createElement('li');
                li.textContent = skillsInput;

                skillCatcher.append(li);
            }
        });
    }
}

// Getting Resume
resume.open('GET', 'formats and forms/format 2/format2.html', true);
if (resume.readyState < 4) {
    resumeCatcher.innerHTML = 'please wait!';
}
resume.onload = function () {
    if (resume.status === 200) {
        resumeCatcher.innerHTML = resume.response;
    } else {
        resumeCatcher.innerHTML = 'Something Went wrong!';
    }
};
resume.send();

// Append Skill Input
function appendSkills() {
    const skills = document.querySelector('#skills');
    const addSkills = document.querySelector('#add-skill');

    // Remove Skill Input
    skills.addEventListener('click', e => {
        if (e.target.classList.contains('remove-skill')) {
            const targ = e.target.parentElement;
            targ.remove();
        }
    });

    // Button skill append
    addSkills.addEventListener('click', () => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="text" placeholder="Enter skill" class="skill-input" />
        <button class="remove-skill">X</button>`;

        skills.append(li);
    });
}

// form changing function
function nxtForm() {
    formCount++;
    const stage = () => {
        if (formCount >= sources.length) {
            return (total = sources.length - 1);
        } else {
            return formCount;
        }
    };
    getForm(stage());
}

// Catch Form using Ajax
function getForm(form) {
    xhr.open('GET', sources[form], true);
    if (xhr.readyState < 4) {
        formCatcher.innerHTML = 'Please Wait!';
    }
    xhr.onload = function () {
        if (xhr.status === 200) {
            btnContainer.style.display = 'block';
            formCatcher.innerHTML = xhr.response;
            msg.textContent = messages[form];
            if (form === 6) {
                appendSkills();
            } else if (form === 7) {
                loadOutput();
            }
            toOutput(form);
        } else {
            formCatcher.innerHTML = 'something went wrong!';
        }
    };
    xhr.send();
}

// to Run Form change
function nextForm() {
    nxtForm();
}
nextForm();
