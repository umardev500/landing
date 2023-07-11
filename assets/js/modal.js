const modals = document.querySelectorAll('.modal')
for (let i = 0; i < modals.length; i++) {
  const modal = modals[i]
  const inner = modal.querySelector('.inner')
  modal.addEventListener('click', function (e) {
    const isInner = inner.contains(e.target)
    if (!isInner) {
      modal.classList.remove('shown')
    }
  })
}

const modalTogglers = document.querySelectorAll('[data-toggle="modal"]')
console.log(modalTogglers)
for (let i = 0; i < modalTogglers.length; i++) {
  const btn = modalTogglers[i]
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    const target = this.dataset.target
    const targetEl = document.getElementById(target)
    targetEl.classList.add('shown')
  })
}