const nameInputEl = document.getElementById('nameInput');
const emailAddressEl = document.getElementById('emailAddress');
const formMessageEl = document.getElementById('formMessage');
const submitBtnEl = document.getElementById('submitBtn');

submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameInputEl === '') {
        console.log('null value')
    } 
})