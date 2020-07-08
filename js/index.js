// Your code goes here.

//First Event
document.querySelector(".logo-heading").addEventListener("click", function(){alert("You Clicked the Logo!")})

//Second Event
const headerImg = document.querySelector("header img")

headerImg.addEventListener("mousedown", function(){document.body.classList.toggle("pink")})

//Third Event

document.addEventListener("keydown", function(){document.body.textContent=""; alert("You Destroyed the Site!")})

//Fourth Event

const header = document.querySelector(".main-navigation")
document.addEventListener("wheel", function(){header.style.backgroundColor ="yellow"})

//Fifth Event & stopPropagation()
const nav = document.querySelector(".nav")
nav.addEventListener("mouseover", function(){nav.style.backgroundColor="lightblue"})

const navLinks = document.querySelectorAll("nav a")

for( var i = 0; i < navLinks.length; i++){
navLinks[i].addEventListener("mouseover", function(e){ this.style.color = "red"; e.stopPropagation()})
}


//Sixth Event
const middleImg= document.querySelectorAll(".img-content img")

for( var i = 0; i< middleImg.length; i++){middleImg[i].addEventListener("dblclick", function(){this.classList.toggle("border")})}

//Seventh Event

const bottomImg = document.querySelector(".content-destination img")
bottomImg.addEventListener("mouseleave", function(){bottomImg.classList.toggle("rotate-center")})


//Eighth Event
const headerText = document.querySelector("header p")
headerText.addEventListener("mouseup", function(){headerText.style.fontSize ="xx-large"})

//Ninth Event

const button = document.querySelectorAll(".btn")
for( var i =0; i< button.length; i++){
    button[i].addEventListener("mousemove", function(){this.classList.add("bounce-top")})

}

//Tenth Event

const footer = document.querySelector(".footer p")
footer.addEventListener("mouseenter", function(){footer.style.color="green"})

//Navigation preventDefault()
navLinks.addEventListener("click", function(evt){
    evt.preventDefault()
})