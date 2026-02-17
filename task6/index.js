var page  = document.querySelector('.page')
var h1  = document.querySelector('.page h1')
var btn  =  document.querySelector('button')

var fleg  = true
btn.addEventListener("click", function () {
   if (!fleg) {
     page.style.background ="black"
    h1.style.color = "white"
    fleg = true
   }
   else if(fleg){
    page.style.background ="white"
    h1.style.color = "black"
    fleg  =false
   }
})