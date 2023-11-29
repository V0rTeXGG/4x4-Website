// функция вызова спасибки, где формы "Остались вопросы?"
// showThanks(document.querySelector('[data-form="order"]')

// функция вызова спасибки, где формы "Мы на связи"
// showThanks(document.querySelector('[data-form="modal"]')

const thanksForms = document.querySelectorAll('[data-show-thanks]');

// Вызов спасибки для форм
if (thanksForms) {
  thanksForms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      showThanks(e.target);
    });
  });
}
