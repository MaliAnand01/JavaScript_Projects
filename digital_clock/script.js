let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);


// theme 
const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');
const body = document.body;

const themes = [
    { name: 'Midnight Plum (Dark)', class: 'theme-midnight-plum' },
    { name: 'Deep Forest (Dark)', class: 'theme-deep-forest' },
    { name: 'Dark Sapphire (Dark)', class: 'theme-dark-sapphire' },
    { name: 'Velvet Night (Dark)', class: 'theme-velvet-night' },
    { name: 'Morning Sky (Light)', class: 'theme-morning-sky' },
    { name: 'Soft Peach (Light)', class: 'theme-soft-peach' },
    { name: 'Mint Breeze (Light)', class: 'theme-mint-breeze' },
    { name: 'Sunny Delight (Light)', class: 'theme-sunny-delight' }
];

function populateThemeDropdown() {
    themes.forEach(theme => {
        const li = document.createElement('li');
        li.classList.add('options');
        li.setAttribute('data-theme-class', theme.class);

        const p = document.createElement('p');
        p.textContent = theme.name;

        li.appendChild(p);
        list.appendChild(li);
    });
}

function applyTheme(themeClass) {
    body.className = '';
    if (themeClass) {
        body.classList.add(themeClass);
    }
}

populateThemeDropdown();

let options = document.querySelectorAll('.options');

selectField.onclick = function () {
    list.classList.toggle('show');
    arrowIcon.classList.toggle('rotate');
};

options.forEach(option => {
    option.onclick = function () {
        const selectedThemeClass = this.getAttribute('data-theme-class');
        selectText.innerHTML = this.textContent;
        applyTheme(selectedThemeClass);
        list.classList.remove('show');
        arrowIcon.classList.remove('rotate');
    };
});

applyTheme(themes[0].class);
selectText.innerHTML = themes[0].name;