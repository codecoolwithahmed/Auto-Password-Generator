// Define character sets
const characterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*(),.?":{}|<>'
};

// Get references to the elements
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const generateButton = document.getElementById('generate-password');
const generatedPasswordInput = document.getElementById('generated-password');

// Update length display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate password on button click
generateButton.addEventListener('click', () => {
    const length = Number(lengthSlider.value); // Convert slider value to number

    // Get selected options
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    // Build character set based on selected options
    let characterSet = '';
    if (includeUppercase) characterSet += characterSets.uppercase;
    if (includeLowercase) characterSet += characterSets.lowercase;
    if (includeNumbers) characterSet += characterSets.numbers;
    if (includeSpecial) characterSet += characterSets.special;

    if (!characterSet) {
        alert('Please select at least one character type.');
        return;
    }

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    // Display password
    generatedPasswordInput.value = password;
});
