humanScore = 0
compScore = 0
Games = 0
alert(Test)

function getComputerChoice() {
    if (ComputerChooser < 0.33) {
        let ComputerChoice = "Rock"
    }
    else if (0.66 >= ComputerChooser > 0.33) {
        let ComputerChoice = "Paper"
    }
    else if (ComputerChooser > 0.66) {
        let ComputerChoice = "Scissors"
    }
    return ComputerChoice
}
function getHumanChoice() {
    let YourList = prompt("What will be your move...?")
    return YourList
}

for (i = 0; i < 5; i += 1) {
    ComputerChooser = Math.random()
    if (getHumanChoice() == getComputerChoice()) {
        console.log("DRAW")
    }
    else if ((getHumanChoice() == "Rock" && getComputerChoice() == "Paper") || (getHumanChoice() == "Paper" && getComputerChoice() == "Scissors") || (getHumanChoice() == "Scissors" && getComputerChoice() == "Rock")) {
        console.log("Point for Computer")
        compScore++
    }
    else {
        console.log("Point for Human")
        humanScore++
    }
}

if (humanScore > compScore) {
    console.log("You won lmfao")
}
else {
    console.log("You lost lmfao")
}


