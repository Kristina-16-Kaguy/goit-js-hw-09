const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.email');
const messageInput = form.querySelector('.message');

const STORAGE_KEY = 'feedback-form-state';

// emailInput.addEventListener('input', event => {
//   formData.email = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

// messageInput.addEventListener('input', event => {
//   formData.message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

form.addEventListener('input', event => {
  if (event.target.classList.contains('email')) {
    formData.email = event.target.value;
  } else if (event.target.classList.contains('message')) {
    formData.message = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const saved = localStorage.getItem(STORAGE_KEY);
if (saved !== null) {
  const parsed = JSON.parse(saved);

  formData.email = parsed.email || '';
  formData.message = parsed.message || '';

  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});
