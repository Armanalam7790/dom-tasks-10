var input = document.querySelector('input')
var p = document.querySelector('p')


input.addEventListener('input',function (elem) {
  p.innerText=  "paragraph : " +  elem.target.value

    
})