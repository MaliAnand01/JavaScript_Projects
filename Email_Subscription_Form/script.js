const scriptURL = 'https://script.google.com/macros/s/AKfycbyJmlDtNfgG-ZMFIgrqhLUVM3zF_8GO3czbK1uNCazbZVcqC2ocHtULQCKvIhc5DZA5jg/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.querySelector('#msg');
const toastBox = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error occurred';


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank You For Subscribing!';
            showToast(successMsg);
            setTimeout(function () {
                msg.innerHTML = '';
            }, 6000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message)
            showToast(errorMsg);
        })
});

const showToast = (msg) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    if (msg.includes('Error')) {
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}