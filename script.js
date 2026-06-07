const board = document.querySelector(".cb")

for (let row = 0; row < 8; row++){
    for (let col = 0; col < 8; col++){
    const sq = document.createElement("div")
    sq.classList.add("square")

    if((row + col) % 2 === 0) {
        sq.style.backgroundColor = "white"
    } else {
        sq.style.backgroundColor = "black"
    }

    board.appendChild(sq)
}
}