const container = document.querySelector('.dropdown')
const langTrigger = document.querySelector('.dropdown > a')
const dropdownMenu = document.querySelector('.dropdown-menu')

langTrigger.addEventListener('click', function (e) {
  e.preventDefault()
  const isShown = container.classList.contains('shown')

  if (isShown) {
    container.classList.remove('shown')
  } else {
    container.classList.add('shown')
  } 
  console.Klog('ok')
})