// DOM Selection
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const successMsg = document.getElementById('successMessage');

// Helper: Show Error
const showError = (element, errorId, message) => {
    const errorElement = document.getElementById(errorId);
    element.classList.add('error');
    element.classList.remove('success');
    errorElement.textContent = message;
    errorElement.classList.add('visible');
};

// Helper: Clear Error
const clearError = (element, errorId) => {
    const errorElement = document.getElementById(errorId);
    element.classList.remove('error');
    element.classList.add('success');
    errorElement.textContent = '';
    errorElement.classList.remove('visible');
};

const validateName = () => {
    const nameValue = nameInput.value.trim();
    // Regex --> Only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    
    if (nameValue === '') {
        showError(nameInput, 'nameError', 'Name is required');
        return false;
    } else if (!nameRegex.test(nameValue)) {
        showError(nameInput, 'nameError', 'Name must contain letters only');
        return false;
    } else {
        clearError(nameInput, 'nameError');
        return true;
    }
};

const validateEmail = () => {
    const value = emailInput.value.trim();

    // does it have an '@' AND a '.'?
    if (!value.includes('@') || !value.includes('.')) {
        showError(emailInput, 'emailError', 'Email must contain @ and .');
        return false;
    }

    clearError(emailInput, 'emailError');
    return true;
};

const validateSubject = () => {
    if (subjectInput.value === "") {
        showError(subjectInput, 'subjectError', 'Please select a subject');
        return false;
    } else {
        clearError(subjectInput, 'subjectError');
        return true;
    }
};


const validateMessage = () => {
    const messageValue = messageInput.value.trim();
    
    // update counter text
    charCount.textContent = `${messageValue.length}/20`;
    
    // change counter color
    if (messageValue.length >= 20) {
        charCount.classList.add('valid');
    } else {
        charCount.classList.remove('valid');
    }

    // validate logic
    if (messageValue.length < 20) {
        showError(messageInput, 'messageError', 'Message must be at least 20 characters');
        return false;
    } else {
        clearError(messageInput, 'messageError');
        return true;
    }
};

// event listener for typing
messageInput.addEventListener('input', validateMessage);


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop page reload

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // show success message
        const firstName = nameInput.value.split(' ')[0];
        successMsg.textContent = `Thank you ${firstName}! I will contact you soon!`;
        successMsg.style.display = 'block';
        
        // clear Form
        form.reset();

        // hide message after 3 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    }
});