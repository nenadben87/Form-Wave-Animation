
const emailInput = document.querySelector('.email-input');
const emailLabel = document.querySelector('.email-label');

const passwordInput = document.querySelector('.password-input');
const passwordLabel = document.querySelector('.password-label');

emailInput.addEventListener('focus', () => {
  emailLabel.classList.add('active');
})

emailInput.addEventListener('blur', () => {
  if(emailInput.value === ''){
    emailLabel.classList.remove('active');
  }
})

passwordInput.addEventListener('focus', () => {
  passwordLabel.classList.add('active');
})

passwordInput.addEventListener('blur', () => {
  if(passwordInput.value === ''){
    passwordLabel.classList.remove('active')
  }
})





 






 