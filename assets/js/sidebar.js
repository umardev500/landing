const closeBtn = document.querySelector('.close')
const sidebar = document.querySelector('.sidebar')

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('shown')
})

// open sidebar
const toggler = document.querySelector('#toggler')

toggler.addEventListener('click', function () {
  console.log('ok')
  sidebar.classList.add('shown')
})