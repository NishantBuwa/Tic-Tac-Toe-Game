let box = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let count=0
let turn_o = true  //player x, player y
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turn_o) { //player O
            box.innerText = "O";
            turn_o = false
            count++
        }
        else { //player X
            box.innerText = "X"
            turn_o = true
            count++
        }
        box.disabled = true

        checkWinner();
    })
})

const diableBoxes = () => {
    for (let b of box) {
        b.disabled = true
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    diableBoxes()
}

const checkWinner = () => {
    for (pattern of winningpattern) {
        let posi1val = box[pattern[0]].innerText
        let posi2val = box[pattern[1]].innerText
        let posi3val = box[pattern[2]].innerText

        if (posi1val != "" && posi2val != "" && posi3val != "val") {
            if (posi1val === posi2val && posi2val === posi3val) {
                console.log("Winner", posi1val)
                showWinner(posi1val)
                return 
            }
        }
        if(count===9){
            msg.innerText="Game is Drawn. Play another game"
            msgcontainer.classList.remove("hide")
            diableBoxes()
        }
    }
}

const enableBox = () => {
    for (let b of box) {
        b.disabled = false
        b.innerText = ""
    }
}

const resetGame = () => {
    enableBox()
    turn_o = true
    msgcontainer.classList.add("hide")
}

newgamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)