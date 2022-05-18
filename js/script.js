let videos = document.querySelectorAll(".video")


for (let i = 0; i<videos.length; i++) {
    videos[i].addEventListener("mouseenter",() => {
        videos[i].play()
        console.log("enter")
    })
    videos[i].addEventListener("mouseout",() => {
        videos[i].pause()
    })
}
console.log(videos)

var but = document.querySelector(".button")
var popUp = document.querySelector(".popup")
var inputs = document.querySelectorAll("input")
but.addEventListener('click', updateTime )


function updateTime() {
    popUp.classList.add('active')
    setTimeout(() => {
        popUp.classList.remove('active')
    },2000)
}
function clearing () {
    inputs.forEach(input=> input.value = '')
}

but.addEventListener('click', clearing)

