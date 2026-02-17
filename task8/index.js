var box = document.querySelector(".box")

box.addEventListener("mouseover", function () {
    box.style.background = "red"
})

box.addEventListener("mouseout", function () {
    box.style.background = "" 
})