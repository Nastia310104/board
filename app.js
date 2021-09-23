const board = document.querySelector('#board')
const colors = ['#ff1f1f', '#ff571f', '#ff8f1f', '#ffc71f', '#ffff1f', '#c7ff1f', '#8fff1f', '#57ff1f', '#1fff1f', '#1fff57', '#1fff8f', '#1fffc7', '#1fffff', '#1fc7ff', '#1e90ff', '#1f57ff', '#1f1fff', '#571fff', '#8f1fff', '#c71fff', '#ff1fff', '#ff1fc7', '#ff1f8f', '#ff1f57', '#ff1f1f']
const SQUEARS_NUMBER = 500

for (let i = 0; i < SQUEARS_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' , () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}