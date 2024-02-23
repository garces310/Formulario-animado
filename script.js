const signinBtn = document.querySelector(".signinBtn")
const signunBtn = document.querySelector(".signunBtn")
const formBx = document.querySelector('.formBx')
const body = document.querySelector('body')

signunBtn.onclick = function(){
    formBx.classList.add('active')
    body.classList.add('active')
}
signinBtn.onclick = function(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}