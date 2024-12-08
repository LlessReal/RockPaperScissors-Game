humanScore = 0
compScore = 0
Games = 0

function getComputerChoice() {
    let ComputerChoice = ""
    ComputerChooser = Math.random()
    if (ComputerChooser < 0.33333) { //If number is in the 0/3 - 1/3 range
        ComputerChoice = "Rock" // Computer Chooses blah
    }
    else if (0.666666 >= ComputerChooser > 0.333333) { // If number is in the 1/3 - 2/3 range
        ComputerChoice = "Paper"
    }
    else if (ComputerChooser > 0.6666666) { //If number is in the 2/3 - 3/3 range
        ComputerChoice = "Scissors" 
    }
    alert("Computer has chosen " + ComputerChoice)
    return ComputerChoice 
}

function getHumanChoice() {
    while (true) {
        YourList = prompt("What will be your move...? (Type rock, paper, or scissors)")
        if (YourList.toUpperCase() != "ROCK" && YourList.toUpperCase() != "PAPER" && YourList.toUpperCase() != "SCISSORS") {
            console.log("That wasn't an option.") 
            alert("That wasn't an option.") 
            continue;
        }
        break;
    }
    return YourList
}

for (i = 0; i < 5; i+= 1) {
    HumanChoice = getHumanChoice()
    ComputerChoice = getComputerChoice()
    if (HumanChoice == ComputerChoice) { // If option is same as computer
        console.log("DRAW") // Prints "DRAW"
        alert("DRAW (Round will be redone)")
        i--
    }
    else if ((HumanChoice == "Rock" && ComputerChoice == "Paper") || (HumanChoice == "Paper" && ComputerChoice == "Scissors") || (HumanChoice == "Scissors" && ComputerChoice == "Rock")) {
        console.log("Point for Computer") 
        alert("Point for Computer") 
        compScore++ // Adds to computer's score
    }
    else {
        console.log("Point for YOU!") 
        alert("Point for YOU!")
        humanScore++ // Adds to human score
    }
    if (humanScore == 3 || compScore == 3) {
        break
    }
}

if (humanScore > compScore) {
    console.log("You won lmfao")
    alert("You won lmfao")
}
else {
    console.log("You lost lmfao")
    alert("You lost lmfao")
}

const RPSBody = document.querySelector("#alsotesting");
// RPSBody.setAttribute("style","background-color: red;");

const RockButton = document.createElement("button");
RockButton.setAttribute("id","rock");
RockButton.textContent = "Rock";
RPSBody.appendChild(RockButton);

/*const PaperButton = document.createElement("button");
PaperButton.setAttribute("id","paper");
PaperButton.textContent = "Paper";
RPSBody.appendChild(PaperButton);

const ScissorsButton = document.createElement("button");
ScissorsButton.setAttribute("id","scissors");
ScissorsButton.textContent = "Scissors";
RPSBody.appendChild(ScissorsButton);

AllChoices = document.querySelectorAll("button"); */
// AllChoices.setAttribute("style","background-color: green; color: white; font-size: 20px; border-radius: 2px; border: solid 2px white;");







