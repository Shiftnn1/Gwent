const first = document.querySelector(".first")
let second = document.querySelector(".second")
const third = document.querySelector(".third")

const firstList = document.getElementById("1")
const secondList = document.getElementById("2")
const thirdList = document.getElementById("3")
first.addEventListener("click", () => {
    firstList.classList.toggle("active")
})

second.addEventListener("click", () => {
    secondList.classList.toggle("active")
})

third.addEventListener("click", () => {
    thirdList.classList.toggle("active")
})

// let tiers = [document.querySelectorAll(".tier-cell")].forEach(tierCell => {
//     let tiers = this.addEventListener("click", (e) => {
//         dataClass = e.target.dataset["tier"]
//         console.log(dataClass)
//     })
//     let listClass = this.addEventListener("click", (e) => {
//         let lists = e.target.dataset["list"]
//     console.log(lists)
//     })

//     const listUnactive = document.querySelectorAll(".tier")
//     const lists = document.querySelectorAll(".list")
//     listUnactive.forEach(elem => {
//         if (elem.dataset["tier"] == listClass){
//             lists.classList.toggle("active")
//         }
//     })
// })

