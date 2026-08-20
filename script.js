(() => {
  const heroBg = document.getElementById('heroCollectionBg');
  if (heroBg) {
    const markMissing = () => {
      document.documentElement.classList.add('hero-bg-missing');
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const expected = isMobile
        ? 'assets/hero-collection-bg-mobile.avif'
        : 'assets/hero-collection-bg.avif';
      console.error(`[MDLF] Missing Hero/Collection background: ${expected}`);
    };
    heroBg.addEventListener('error', markMissing, { once: true });
    if (heroBg.complete && heroBg.naturalWidth === 0) markMissing();
  }

  const form = document.getElementById('nurseryForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  const phone = form.querySelector('#phone');
  phone?.addEventListener('input', () => {
    const digits = phone.value.replace(/\D/g, '').slice(0, 10);
    let formatted = '';
    if (digits.length) formatted = '(' + digits.slice(0, 3);
    if (digits.length >= 3) formatted += ') ' + digits.slice(3, 6);
    if (digits.length >= 6) formatted += '-' + digits.slice(6, 10);
    phone.value = formatted;
  });

  const validators = {
    parentName: value => value.trim().length >= 2 ? '' : 'Please enter the parent name.',
    babyName: value => value.trim().length >= 1 ? '' : "Please enter baby's name.",
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Please enter a valid email.',
    phone: value => value.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a valid phone number.',
    birthdate: value => value.trim() ? '' : "Please enter baby's birthdate.",
    address: value => value.trim().length >= 3 ? '' : 'Please enter a delivery area or address.'
  };

  function validateField(input) {
    const field = input.closest('.form-field');
    const error = field?.querySelector('.field-error');
    const validate = validators[input.name];
    if (!field || !validate) return true;

    const message = validate(input.value);
    field.classList.toggle('is-invalid', Boolean(message));
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message;
    return !message;
  }

  form.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.form-field')?.classList.contains('is-invalid')) validateField(input);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const required = [...form.querySelectorAll('input[required]')];
    const valid = required.map(validateField).every(Boolean);

    if (!valid) {
      if (status) status.textContent = 'Please check the highlighted fields.';
      form.querySelector('.is-invalid input')?.focus();
      return;
    }

    if (status) status.textContent = 'Thanks — your details are ready to send.';
  });
})();
