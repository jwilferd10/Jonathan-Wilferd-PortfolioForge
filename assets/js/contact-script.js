// const nameInputEl = document.getElementById('nameInput');
// const emailAddressEl = document.getElementById('emailAddress');
// const formMessageEl = document.getElementById('formMessage');
// const submitBtnEl = document.getElementById('submitBtn');

// submitBtnEl.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Form Elements
//     const formField = [nameInputEl, emailAddressEl, formMessageEl];
//     let areFieldsEmpty = false;

//     // Check if each part of the form has a value inside
//     formField.forEach(field => {
//         if (field.value === '') {
//             areFieldsEmpty = true;
//         }

//         if (areFieldsEmpty) {
//             // Add animations to the form
//             field.classList.add('fieldAnimation');
//             field.style.animation = 'fieldAnimation 2s';
//             field.classList.add('errorColor');

//             // Remove the class after timeout conditions trigger
//             setTimeout(() => {
//                 field.classList.remove('fieldAnimation');
//                 field.classList.remove('errorColor');
//                 field.style.animation = '';
//             }, 1500);
//         } else if (!areFieldsEmpty) {
//             field.classList.add('successColor');
//             field.style.animation = 'fieldAnimation 2s';

//             // Remove the class after timeout conditions trigger
//             setTimeout(() => {
//                 field.classList.remove('fieldAnimation');
//                 field.classList.remove('successColor');
//                 field.style.animation = '';
//             }, 1500);
//         }
//     });
// });