const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const clearAllBtn = document.querySelector('.clearBtn');

// Add task function
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = inputBox.value;  // Prevent XSS
    const span = document.createElement('span');
    span.textContent = "\u00d7";  // Close icon
    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = '';
    inputBox.focus();  // Auto-focus
    saveData();
    updateClearBtnVisibility();
}

// Handle Enter key
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Toggle complete or delete task
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
    updateClearBtnVisibility();
}, false);

// Clear all tasks
clearAllBtn.addEventListener('click', function () {
    listContainer.innerHTML = '';
    saveData();
    updateClearBtnVisibility();
});

// Save data to localStorage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Load tasks from localStorage
function showTask() {
    const savedData = localStorage.getItem('data');
    listContainer.innerHTML = savedData ? savedData : '';
    updateClearBtnVisibility();
}

// Toggle clear button visibility
function updateClearBtnVisibility() {
    clearAllBtn.style.display = listContainer.children.length > 0 ? 'block' : 'none';
}

showTask();
