const buttons = document.querySelectorAll('[data-accordion-target]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(
      button.dataset.accordionTarget
    );

    target.classList.toggle('hidden');

    button.setAttribute(
      'aria-expanded',
      !target.classList.contains('hidden')
    );
  });
});