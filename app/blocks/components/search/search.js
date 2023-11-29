document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('[data-search-input]')
  const searchIcon = document.querySelector('[data-search-icon]')

  searchInput.addEventListener('focus', function() {
    this.classList.add('active')
    searchIcon.classList.add('active')
  })

  searchInput.addEventListener('blur', function() {
    if(this.value.length === 0) {
      this.classList.remove('active')
      searchIcon.classList.remove('active')
    }
  })
})


