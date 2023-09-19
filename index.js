const left = document.querySelector('.btnLeft')
const right = document.querySelector('.btnRight')

const carousel = document.querySelector('.carousel')
const model = document.querySelectorAll('.model')
const card = document.querySelectorAll('.card')
const turn = document.querySelectorAll('.turn')
const turnBack = document.querySelectorAll('.turn_back')

let proyectos = carousel.children.length
let widthCarousel = proyectos * 100

let rightMov = 100
let leftMov = -100
let n = 100

carousel.style = `width: ${widthCarousel}%`

left.addEventListener('click', () => {
    if (leftMov < 0) {
        leftMov = leftMov + n
        rightMov = rightMov - n
        console.log('Izquierda: ' + leftMov)
        console.log('Derecha: ' + rightMov)
    }

    carousel.style = `margin-left: ${leftMov}%; width: ${widthCarousel}%`

    card.forEach((e, i) => {
        let position = i * -100

        if (leftMov === position) {
            e.classList.add('cardVista')
            model[i].classList.add('modelVista')
        } else {
            e.style = 'transform: rotateY(0deg)'
            e.classList.remove('cardVista')
            model[i].classList.remove('modelVista')
        }
    })
})

right.addEventListener('click', () => {
    if (rightMov < (widthCarousel - 100)) {
        rightMov = rightMov + n
        leftMov = leftMov - n
        console.log('Izquierda: ' + leftMov)
        console.log('Derecha: ' + rightMov)
    }

    carousel.style = `margin-left: -${rightMov}%; width: ${widthCarousel}%`

    card.forEach((e, i) => {
        let position = i * 100

        if (rightMov === position) {
            e.classList.add('cardVista')
            model[i].classList.add('modelVista')
        } else {
            e.style = 'transform: rotateY(0deg)'
            e.classList.remove('cardVista')
            model[i].classList.remove('modelVista')
        }
    })
})

turn.forEach((e, i) => {
    e.addEventListener('click', () => {
        card[i].style = 'transform: rotateY(-180deg)'
    })
})
turnBack.forEach((e, i) => {
    e.addEventListener('click', () => {
        card[i].style = 'transform: rotateY(0deg)'
    })
})