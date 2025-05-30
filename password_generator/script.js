const passwordBox = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const passLength = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@#$%^&*()_+~[]}{|></-=?';

const allChars = upperCase + lowerCase + numbers + symbols;

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', copyPassword);

function generatePassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (passLength > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    const password = passwordBox.value;
    if(password){
        navigator.clipboard.writeText(password).then(()=>{
            showToast("Password copied!");
        }).catch(err => {
            console.log("Failed to copy password: ", err);
        })
    }else{
        showToast("No password to copy!");
    }
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.padding = "10px 20px";
    toast.style.backgroundColor = "#333";
    toast.style.color = "#fff";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s";

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.addEventListener("transitionend", () => toast.remove());
    }, 2000); // visible for 2 seconds
}