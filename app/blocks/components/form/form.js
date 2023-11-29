const phoneMask = document.querySelectorAll('[data-custom-mask]')
let validForm = new formValidator('[data-validate-form]', {});

phoneMask.forEach((element) => {
  let phoneMaskSimple = new customInputMask(element, {});
})


