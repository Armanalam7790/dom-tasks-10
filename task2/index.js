var box  = document.querySelector('.box')
var btn  = document.querySelector('button')
let flag= 1
btn.addEventListener("click",function() {
  
    if (flag==1) {
        box.style.background = "red"
        flag = 2
    }

    else if (flag==2) {
        box.style.background = "green"
        flag = 3
    }

    else if (flag==3) {
        box.style.background = "blue"
        flag = 1
    }

    
    
})