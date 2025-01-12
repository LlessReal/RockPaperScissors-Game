humanScore = 0; compScore = 0;

const RPSBody = document.querySelector("body"); // Targets body
RPSBody.setAttribute("style","background-color: rgb(255,200,200);"); // Changes color to light red

const GameHolder = document.createElement("div"); // Box that holds messenger text & buttons (the game basically)
GameHolder.setAttribute("style","display: flex; flex-direction: column; align-items: center;"); // messenger text on top of buttons, all items centered
GameHolder.setAttribute("class","popup")
RPSBody.appendChild(GameHolder) // adds it in

const Messenger = document.createElement("p") // The messenger text in question
Messenger.setAttribute("style","color: green; font-size: 40px;")
Messenger.setAttribute("class","popup")
GameHolder.appendChild(Messenger)
const FinalMessage = document.createElement("p") // The messenger text in question

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

Messenger.textContent = "What will be your move...?"

const startfunction = function() {
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
    const waitingfunction = function(ChosenMove1) {
        CompsChoice = getComputerChoice()
        
        if (ChosenMove1 == CompsChoice) { // If option is same as computer
            Messenger.textContent = "Computer has chosen " + CompsChoice + " while you have chosen " + ChosenMove1 + ". Therefore, DRAW!"
            Messenger.removeAttribute("class","popup");
            void Messenger.offsetWidth;
            Messenger.setAttribute("class","popup");
        }
        else if ((ChosenMove1 == "Rock" && CompsChoice == "Paper") || (ChosenMove1 == "Paper" && CompsChoice == "Scissors") || (ChosenMove1 == "Scissors" && CompsChoice == "Rock")) {
            Messenger.textContent = "Computer has chosen " + CompsChoice + " while you have chosen " + ChosenMove1 + ". Therefore, Computer gets a point!"; compScore++;
            Messenger.removeAttribute("class","popup");
            void Messenger.offsetWidth;
            Messenger.setAttribute("class","popup");
        }
        else {
            Messenger.textContent = "Computer has chosen " + CompsChoice + " while you have chosen " + ChosenMove1 + ". Therefore, you get a point!"; humanScore++; // Adds to human score
            Messenger.removeAttribute("class","popup");
            void Messenger.offsetWidth;
            Messenger.setAttribute("class","popup");
        }
        WinandLoseAudio = new Audio("tmwinlose.mp3");
        if (humanScore == 3 || compScore == 3) { // If a player has hit 3 points
            if (humanScore > compScore) { // Win!!
                FinalMessage.setAttribute("style","color: green; font-size: 20px;")
                FinalMessage.textContent = "Well done, you won!! Against a computer lol"
                GameHolder.insertBefore(FinalMessage,Messenger)
                WinandLoseAudio.currentTime = 123.75 // Victory!!
                WinandLoseAudio.play()
                setTimeout(() => {WinandLoseAudio.pause();}, 12000);
            }
            else { // Game Over
                FinalMessage.setAttribute("style","color: red; font-size: 20px;")
                FinalMessage.textContent = "You lost, ggs lol"
                GameHolder.insertBefore(FinalMessage,Messenger)
                WinandLoseAudio.currentTime = 457.5 // u failed...
                WinandLoseAudio.play()
                setTimeout(() => {WinandLoseAudio.pause();}, 13000); // Plays for 13s
            }
            document.querySelectorAll("#buttongroup button").forEach((item) => {
                ButtonHolder.removeChild(item);
                item.removeEventListener("mouseover", PointAnim); // When you move over the buttons
                item.removeEventListener("click", MoveLogger); // When you click the buttons
            })
        }
    }
}

// Game Starts
startfunction()

const getComputerChoice = function() {
    ComputerChooser = Math.random();
    if (ComputerChooser < 0.33333) { // If number is in the 0/3 - 1/3 range
        ComputerChoice = "Rock" // Computer Chooses blah
    }
    else if (0.666666 >= ComputerChooser > 0.333333) { // If number is in the 1/3 - 2/3 range
        ComputerChoice = "Paper"
    }
    else if (ComputerChooser > 0.6666666) { // If number is in the 2/3 - 3/3 range
        ComputerChoice = "Scissors" 
    }
    return ComputerChoice
}


