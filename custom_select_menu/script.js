const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');
let options = document.querySelectorAll('.options');

let optionsArray = Array.from(options);

selectField.onclick = function () {
    list.classList.toggle('show');
    arrowIcon.classList.toggle('rotate');
};

for (option of optionsArray) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;

        list.classList.toggle('show');
        arrowIcon.classList.toggle('rotate');
    };
};