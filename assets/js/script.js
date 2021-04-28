const modal = document.querySelector('.card__modal')
const previews = document.querySelectorAll('.card__img img')
const original = document.querySelector('.full-img')
const button = document.querySelectorAll('.card__btn')

previews.forEach((e) => {
  e.addEventListener('click', () => {
    modal.classList.add('card__modal-open');
    original.classList.add('card__modal__img-open')

    const originalSrc = e.getAttribute('data-original')
    original.src = `./assets/img/${originalSrc}`
  })
})

button.forEach((e) => {
  e.addEventListener('click', () => {
    modal.classList.add('card__modal-open');
    original.classList.add('card__modal__img-open')

    const originalSrc = e.getAttribute('data-original')
    original.src = `./assets/img/${originalSrc}`
  })
})

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__modal')) {
    modal.classList.remove('card__modal-open')
    original.classList.remove('card__modal__img-open')
  }
})