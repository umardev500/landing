const menus = document.querySelectorAll('[data-scroll]')

function gotoElementScroll(id) {
  const element = document.getElementById(id)
  console.log('elem', element)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', function (e) {
    e.preventDefault()
    const id = menus[i].dataset.scroll
    gotoElementScroll(id)
  })
}