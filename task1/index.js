var p  = document.querySelector('p')
var button  = document.querySelector('button')

button.addEventListener("click", function() {
if (p.innerText == "Hello") {
    p.innerText = 'Welcome'
}
else{
    p.innerText ="Hello"
}
  
})

