let block = document.querySelector('.color1')
let block2 = document.querySelector('.color2')
let block3 = document.querySelector('.color3')
let block4 = document.querySelector('.color4')
let item = document.querySelector('.item1')


 block.addEventListener('click', function() {
    if(block.innerHTML = 'H') {
        item.innerHTML = 'B'
        item.style.background = 'red'
    }else {
        block.innerHTML = 'H'
    }
}) 


block2.addEventListener('click', function() {
    if(block.innerHTML = 'R') {
        block.innerHTML = 'C'
        document.body.style.background = 'yellow'
    }else {
        block.innerHTML = 'R'
    }
})

block3.addEventListener('click', function() {
    if(block.innerHTML = 'W') {
        block.innerHTML = 'C'
        document.body.style.background = 'blue'
    }else {
        block.innerHTML = 'W'
    }
})

block4.addEventListener('click', function() {
    if(block.innerHTML == 'X') {
        block.innerHTML = 'C'
        document.body.style.background = 'white'
    }else {
        block.innerHTML = 'X'
        document.body.style.background = 'white'
    }
})
