

var rl = document.querySelector('.rotate-left')
var rr = document.querySelector('.rotate-right')
var box = document.querySelector('.box')

var rotation = 0

rr.addEventListener('click', function() {
    rotation += 45
    box.style.transform = "rotate(" + rotation + "deg)"
})

rl.addEventListener('click', function() {
    rotation -= 45
    box.style.transform = "rotate(" + rotation + "deg)"
})