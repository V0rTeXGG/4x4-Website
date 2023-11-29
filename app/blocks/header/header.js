// перед использованием добавить в структуру перед шапкой элемент ref-header
const html = document.documentElement
const headerEl = document.querySelector('.header');
const header = document.querySelector('.header');
const ref = document.querySelector('.ref-header');
const headerBurger = document.querySelector("[data-open-header-menu]")
const headerMenu = document.querySelector("[data-header-menu]")

const toggleHeaderClassOnScroll = (props) => {
  const {
    ref,
    element,
    options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
  } = props;

  const callback = ([entry]) => {
    element.classList.toggle('fixed', !entry.isIntersecting);
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(ref);
};

toggleHeaderClassOnScroll({
  ref: ref,
  element: headerEl,
});

headerBurger.addEventListener('click', function() {
  this.classList.toggle('active')
  headerMenu.classList.toggle('active')
  if(!header.classList.contains('fixed')) {
    header.classList.add('fixed')
  } else {
    if(window.pageYOffset < 1) {
      header.classList.remove('fixed')
    }
  }
  if(html.classList.contains('disable-scrolling')) {
    enableScrolling()
  } else {
    disableScrolling();
  }
})
