let btn = document.querySelector("button")
let body = document.body
let text = document.querySelector("#text")
let sim=document.querySelector("#sim")
let hex=document.querySelector("#hex")
btn.addEventListener("click", function () {
    var r = random()
    var g = random()
    var b = random()
    console.log(`rgb(${r},${g},${b})`,"kjhg")
    body.style.backgroundColor = `rgb(${r},${g},${b})`
    hexR=Hex(r)
    hexG=Hex(g)
    hexB = Hex(b)
    // console.log(hexR,hexG,hexB)
    body.style.backgroundColor=`rgb(${hexR},${hexG},${hexB})`
    console.log(`#${hexR}${hexG}${hexB}`)
    text.innerText = `#${hexR}${hexG}${hexB}`
   sim.addEventListener("click", function (e) {
    e.preventDefault()
     text.innerText=`RGB(${r},${g},${b})`
})
hex.addEventListener("click", function (e) {
    e.preventDefault()
    text.innerText = `#${hexR}${hexG}${hexB}`
})
})

let random = function () {
   return Math.floor(Math.random()*256)
}

let Hex=function(a){
    if (a > 15) return a.toString(16).toUpperCase()
    return `0${a.toString(16).toUpperCase()}`
}