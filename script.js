document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('toggle-contrast');
  const mainStylesheet = document.getElementById('main-stylesheet');
  const form = document.getElementById('personal-form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  // Alternar entre el estilo normal y el alto contraste
  toggleButton.addEventListener('click', () => {
      if (mainStylesheet.getAttribute('href') === 'styles.css') {
          mainStylesheet.setAttribute('href', 'high-contrast.css');
          toggleButton.textContent = 'Modo Normal';
      } else {
          mainStylesheet.setAttribute('href', 'styles.css');
          toggleButton.textContent = 'Alto Contraste';
      }
  });

  // Validación del formato de email
  form.addEventListener('submit', (event) => {
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
          emailError.textContent = 'Por favor, ingrese un email válido.';
          emailError.style.color = 'red';
          event.preventDefault();
      } else {
          emailError.textContent = '';
      }
  });

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
});
