humanScore = 0; compScore = 0;

const RPSBody = document.querySelector("body"); // Targets body
RPSBody.setAttribute("style","background-color: rgb(255,200,200);"); // Changes color to light red

const GameHolder = document.createElement("div"); // Box that holds messenger text & buttons (the game basically)
GameHolder.setAttribute("style","display: flex; flex-direction: column; align-items: center;"); // messenger text on top of buttons, all items centered
RPSBody.appendChild(GameHolder) // adds it in

const Messenger = document.createElement("p") // The messenger text in question
Messenger.setAttribute("style","color: green; font-size: 40px;")
GameHolder.appendChild(Messenger)

const ButtonHolder = document.createElement("div"); // Button holder
ButtonHolder.setAttribute("style","display: flex;"); // Flex to make them all the same size
ButtonHolder.setAttribute("id","buttongroup")
GameHolder.appendChild(ButtonHolder)

const RockButton = document.createElement("button");
RockButton.textContent = "Rock";
ButtonHolder.appendChild(RockButton);

const PaperButton = document.createElement("button");
PaperButton.textContent = "Paper";
ButtonHolder.appendChild(PaperButton);

const ScissorsButton = document.createElement("button");
ScissorsButton.textContent = "Scissors";
ButtonHolder.appendChild(ScissorsButton);

const startfunction = function() {
    Messenger.textContent = "What will be your move...?"
    document.querySelectorAll("#buttongroup button").forEach((item) => { // Selects all buttons in the 2nd button holder + goes thru each of them
        item.setAttribute("class","rainbow")
        PointAnim = function() {item.style.cursor = "pointer"; }
        MoveLogger = function() {
            const ChosenMove = item.textContent; // Gets the text from specific buttons in holder and stores it as the choice
            waitingfunction(ChosenMove); // Put in computer choice function
        }
        item.addEventListener("mouseover", PointAnim); // When you move over the buttons
        item.addEventListener("click", MoveLogger); // When you click the buttons
    })
}

// Game Starts
startfunction()

const waitingfunction = function(newmove) {
    Messenger.textContent = "Computer is choosing.."
    document.querySelectorAll("#buttongroup button").forEach((item) => {
        item.setAttribute("class","gray") // Turns buttons gray
        item.removeEventListener("click", MoveLogger); // Removes events to make guardrails
        item.removeEventListener("mouseover", PointAnim);
    })
    alert("This should go")
    setTimeout(getComputerChoice,4000); // Wait 2s cuz why not
    alert("This shouln't")
    Messenger.textContent = "Computer has chosen " + "!!";

    if (newmove == ComputerChoice) { // If option is same as computer
        alert("DRAW (Round will be redone)");
    }
    else if ((newmove == "Rock" && ComputerChoice == "Paper") || (newmove == "Paper" && ComputerChoice == "Scissors") || (newmove == "Scissors" && ComputerChoice == "Rock")) {
        alert("Point for Computer"); compScore++; // Adds to computer's score
    }
    else {
        alert("Point for YOU!"); humanScore++; // Adds to human score
    }
    ChosenMove = ""
    if (humanScore == 3 || compScore == 3) { // If a player has hit 3 points
        if (humanScore > compScore) { 
            alert("You won lmfao")
        }
        else {
            alert("You lost lmfao")
        }
    }
    else {
        startfunction() // Starts again if no one has hit 3 points yet
    } 
}

function getComputerChoice() {
    ComputerChooser = Math.random();
    alert("Debuggng");
    if (ComputerChooser < 0.33333) { // If number is in the 0/3 - 1/3 range
        ComputerChoice = "Rock" // Computer Chooses blah
    }
    else if (0.666666 >= ComputerChooser > 0.333333) { // If number is in the 1/3 - 2/3 range
        ComputerChoice = "Paper"
    }
    else if (ComputerChooser > 0.6666666) { // If number is in the 2/3 - 3/3 range
        ComputerChoice = "Scissors" 
    }
    alert("Computer has chosen " + ComputerChoice)
    return ComputerChoice 
}





