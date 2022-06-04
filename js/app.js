let body = document.querySelector(".main")


body.addEventListener("click", () => {

    let audio = new Audio()

    audio.src = "./static/baloo.wav"

    setTimeout(() => {
        audio.play()

    }, 800);


    const x = event.offsetX
    const y = event.offsetY

    let spans = document.createElement("span")
    spans.classList.add("baloon")
    spans.style.left = x + "px"
    spans.style.top = y + "px"

    let size = Math.random() * 300

    spans.style.width = size + "px"
    spans.style.height = size + "px"

    body.appendChild(spans)
    setTimeout(() => {
        spans.remove()
    }, 1000);
}

)
function heart2() {
    let heart = document.createElement("span")
    heart.style.left = Math.random() * 1000 + "px"
    heart.style.top = Math.random() * 1500 + "px"

    let size = Math.random() * 200

    heart.classList.add("heart2")
    heart.style.width = size + "px"
    heart.style.height = size + "px"

    body.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 3000);
}

function hearts() {
    let heart = document.createElement("span")
    heart.style.left = Math.random() * 1000 + "px"
    heart.style.top = Math.random() * 3000 + "px"

    let size = Math.random() * 200

    heart.classList.add("hearts")
    heart.style.width = size + "px"
    heart.style.height = size + "px"

    body.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 3000);
}

function heartBaloon() {
    let heart = document.createElement("span")
    heart.style.left = Math.random() * 1000 + "px"
    heart.style.top = Math.random() * 3000 + "px"

    let size = Math.random() * 100

    heart.classList.add("heart-baloon")
    heart.style.width = size + "px"
    heart.style.height = size + "px"

    body.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 3000);
}

function baloon() {
    let heart = document.createElement("span")
    heart.style.left = Math.random() * 1000 + "px"
    heart.style.top = Math.random() * 3000 + "px"

    let size = Math.random() * 400

    heart.classList.add("baloon2")
    heart.style.width = size + "px"
    heart.style.height = size + "px"

    body.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 4000);

}




setTimeout(() => {
    setInterval(() => {
        baloon()
    }, 300);
}, 36000);


setTimeout(() => {
    setInterval(() => {
        hearts()
        heart2()
        heartBaloon()
    }, 800);

}, 38000);
