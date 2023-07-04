const toTopBtn = document.getElementById('to-top')

toTopBtn.addEventListener('click', function () {
  window.scrollTo({top: 0, behavior: 'smooth'})
})

window.addEventListener('scroll', function () {
  const viewH = this.window.innerHeight
  const currentScroll = this.window.scrollY

  if (currentScroll > viewH) {
    toTopBtn.classList.add('shown')
  } else {
    toTopBtn.classList.remove('shown')
  }
})