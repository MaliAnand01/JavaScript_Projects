let userInput = document.getElementById('birth-date');
const calcBtn = document.getElementById('calBtn');
const result = document.getElementById('result');

userInput.value = ''; // Clear the input field initially 
userInput.max = new Date().toISOString().split('T')[0]; // Set max date to today

calcBtn.addEventListener('click', calculateAge);

function calculateAge() {
    if (!userInput.value) {
        result.innerHTML = '<span style="color:#D40000;">Please select your birth date.</span>';
        return; // Stop execution if no date is selected
    }

    const birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are zero-based
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Months are zero-based
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;



    console.log(`Age: ${y3} years, ${m3} months, and ${d3} days`);

}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}