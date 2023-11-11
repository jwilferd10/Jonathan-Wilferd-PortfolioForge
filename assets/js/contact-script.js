const nameInputEl = document.getElementById('nameInput');
const emailAddressEl = document.getElementById('emailAddress');
const formMessageEl = document.getElementById('formMessage');
const submitBtnEl = document.getElementById('submitBtn');

const TIMEOUT_DURATION = 1500;

const processForm = () => {
    // Form Elements
    const formField = [nameInputEl, emailAddressEl, formMessageEl];
    let checkEmptyField = false;

    // Check if each part of the form has a value inside
    formField.forEach(field => {
        if (field.value === '') {
            checkEmptyField = true;
        }

        if (checkEmptyField) {
            // Add animations to the form
            field.classList.add('emptyFieldAnimation');
            field.style.animation = 'emptyFieldAnimation 2s';
            field.classList.add('errorColor');

            // Remove the class after timeout conditions trigger
            setTimeout(() => {
                field.classList.remove('emptyFieldAnimation');
                field.classList.remove('errorColor');
                field.style.animation = '';
            }, TIMEOUT_DURATION);
        }
    });
};

submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    processForm();
});