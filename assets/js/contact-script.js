const nameInputEl = document.getElementById('nameInput');
const emailAddressEl = document.getElementById('emailAddress');
const formMessageEl = document.getElementById('formMessage');
const submitBtnEl = document.getElementById('submitBtn');

submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();

    const formField = [nameInputEl, emailAddressEl, formMessageEl];
    let checkEmptyField = false;

    formField.forEach(field => {
        if (field.value === '') {
            checkEmptyField = true;
        }

        if (checkEmptyField) {
            field.classList.add('emptyFieldAnimation');
            field.style.animation = 'emptyFieldAnimation 2s';
            field.classList.add('test');

            setTimeout(() => {
                field.classList.remove('emptyFieldAnimation');
                field.classList.remove('test');
                field.style.animation = '';
            }, 1500);
        }
    });
});