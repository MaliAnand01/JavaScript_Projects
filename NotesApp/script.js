const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

// Function to save notes to localStorage
function saveNotes() {
    const notes = [];
    document.querySelectorAll('.input-box').forEach(inputBox => {
        // Store the text content, preserving newlines
        notes.push(inputBox.innerText);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to create a single note element
function createNoteElement(text = '') {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    const inputBox = document.createElement('p');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    inputBox.innerText = text; // Set text content directly

    const img = document.createElement('img');
    img.src = 'images/delete.png';

    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(img);

    // Attach event listener to save on input
    inputBox.addEventListener('input', saveNotes); // Use 'input' event for real-time saving

    return noteDiv;
}

// Function to show notes loaded from localStorage
function showNotes() {
    notesContainer.innerHTML = ''; // Clear existing notes
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    savedNotes.forEach(noteText => {
        notesContainer.appendChild(createNoteElement(noteText));
    });
}

// Event listener for creating new notes
createBtn.addEventListener('click', () => {
    notesContainer.appendChild(createNoteElement()); // Create an empty note
    saveNotes(); // Save the new note
});

// Event listener for deleting notes (using event delegation)
notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove(); // Removes the whole note div
        saveNotes(); // Save after deletion
    }
});

// Initialize notes on page load
showNotes();