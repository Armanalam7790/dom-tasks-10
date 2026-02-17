//  var box = document.querySelector('#box')
//  var play = document.querySelector('.play')
//  var pause = document.querySelector('.pause')

//  play.addEventListener('click',function() {
 
//     box.style.animationName  = "rotate"
  
    
//  })

//  pause.addEventListener('click',function() {

//     box.style.animationName  = ""
    
    
//  })

let flag  = false;

var btn  =  document.querySelector("button")
var bulb  =  document.querySelector("#bulb")


btn.addEventListener("click",function() {
   if (flag===false) {
     bulb.style.backgroundColor=  "#ffbf00"
    btn.innerHTML = "off"
    console.log('bulb on');
    flag = true
   }
   else{
     bulb.style.backgroundColor=  "#000"
    btn.innerHTML = "onn"
    console.log('bulb of');
    flag= false
    
   }
})