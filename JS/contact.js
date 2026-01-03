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