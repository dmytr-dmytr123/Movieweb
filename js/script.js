let btnNext = document.getElementById("btnNext")
let btnPrev = document.getElementById("btnPrev")
let picture = document.getElementById("picture")
let slide_container = document.getElementById("slide-container")

//DOM level 1
// btnNext.onclick = function(){

// }

let images = [
    "la cassa.png", "stus.jpg", "stranger things.jpg", "home alone.jpg", "runner.jpg", "cmbyn.jpg"
]

let pos = 0
let path = "../images/"

function PictureChange(){
    if(pos == images.length - 1)
        pos = -1

    picture.src = `${path}${images[++pos]}`  
}

//DOM level 2
btnNext.addEventListener("click",function (){
    PictureChange() 
} )

btnPrev.addEventListener("click",function (){
    if(pos == 0) 
        pos = images.length

    picture.src = `${path}${images[--pos]}`  
    
} )

let intervalId

slide_container.addEventListener("mouseenter", function(){
    clearInterval(intervalId)
})

slide_container.addEventListener("mouseleave", function(){
    intervalId = setInterval(() => {
        PictureChange()
    }, 3000)   
})