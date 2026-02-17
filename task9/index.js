var btn = document.querySelector("button")

var p = document.querySelector("p")
btn.addEventListener("click", function() {
    p.innerText = "Button Clicked"
    btn.disabled = true   
})