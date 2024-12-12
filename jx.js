let gameBoardObject = {

    gameBoard: 
    [ "","","",    
     "", "", "",
    "", "", "" ]

    
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    
}

let player1 = new Player("Player 1", "X")
let player2 = new Player("Player 2", "O")






let playTic = function(choice1, choice2, choice3, choice4, choice5, choice6){


let yesWinner = 0;

let winningLabel = document.querySelector(".tictactoe")

let playerName1 = document.querySelector("#user1")
let playerName2 = document.querySelector("#user2")

gameBoardObject.gameBoard[choice1] = player1.marker;

gameBoardObject.gameBoard[choice2] = player2.marker;

gameBoardObject.gameBoard[choice3] = player1.marker;

gameBoardObject.gameBoard[choice4] = player2.marker;

gameBoardObject.gameBoard[choice5] = player1.marker;

gameBoardObject.gameBoard[choice6] = player2.marker;

    if (gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[3] == "X" && gameBoardObject.gameBoard[6] == "X"){

    winningLabel.textContent = playerName1.value + " Wins!"
    winningLabel.style.color = "red"
    console.log(gameBoardObject.gameBoard)
    yesWinner = 1;
    
    } 
    if(gameBoardObject.gameBoard[1] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[7] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[2] == "X" && gameBoardObject.gameBoard[5] == "X" && gameBoardObject.gameBoard[8] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    if (gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[1] == "X" && gameBoardObject.gameBoard[2] == "X"){
    
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    
    } 
    if(gameBoardObject.gameBoard[3] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[5] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[6] == "X" && gameBoardObject.gameBoard[7] == "X" && gameBoardObject.gameBoard[8] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[8] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[2] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[6] == "X"){
        winningLabel.textContent = playerName1.value + " Wins!"
        winningLabel.style.color = "red"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    
    if (gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[3] == "O" && gameBoardObject.gameBoard[6] == "O"){
    
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    
    } 
    if(gameBoardObject.gameBoard[1] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[7] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[2] == "O" && gameBoardObject.gameBoard[5] == "O" && gameBoardObject.gameBoard[8] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    if (gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[1] == "O" && gameBoardObject.gameBoard[2] == "O"){
    
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    
    } 
    if(gameBoardObject.gameBoard[3] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[5] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[6] == "O" && gameBoardObject.gameBoard[7] == "O" && gameBoardObject.gameBoard[8] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[8] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }
    
    if(gameBoardObject.gameBoard[2] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[6] == "O"){
        winningLabel.textContent = playerName2.value + " Wins!"
        winningLabel.style.color = "blue"
        console.log(gameBoardObject.gameBoard)
        yesWinner = 1;
    }

    else if(yesWinner !== 1){
        winningLabel.textContent = "It's a tie!"
        console.log(gameBoardObject.gameBoard)
    }



}


let displayLogic = {

    displayRender: function(){
        
        let ticCell = document.querySelectorAll(".cell")
        let p1choice1 = ""
        let p2choice1 = ""
        let p1choice2 = ""
        let p2choice2 = ""
        let p1choice3 = ""
        let p2choice3 = ""




        ticCell.forEach((button) => {
            button.addEventListener("click", () => {

                if(p1choice1 === "" && p2choice1 === "" && p1choice2 === "" && p2choice2 === "" && p1choice3 === "" && p2choice3 === ""){
                    
                    p1choice1 = parseInt(button.textContent);
                    
                    button.textContent = player1.marker;

                    button.style.color = "red";
                }
                else if(p1choice1 !== "" && p2choice1 === "" && p1choice2 === "" && p2choice2 === "" && p1choice3 === "" && p2choice3 === ""){
                    p2choice1 = parseInt(button.textContent);

                    button.textContent = player2.marker;

                    button.style.color = "blue";
                }
                else if(p1choice1 !== "" && p2choice1 !== "" && p1choice2 === "" && p2choice2 === "" && p1choice3 === "" && p2choice3 === ""){
                    p1choice2 = parseInt(button.textContent);

                    button.textContent = player1.marker;

                    button.style.color = "red";
                }
                else if(p1choice1 !== "" && p2choice1 !== "" && p1choice2 !== "" && p2choice2 === "" && p1choice3 === "" && p2choice3 === ""){
                    p2choice2 = parseInt(button.textContent);

                    button.textContent = player2.marker;

                    button.style.color = "blue";
                }
                else if(p1choice1 !== "" && p2choice1 !== "" && p1choice2 !== "" && p2choice2 !== "" && p1choice3 === "" && p2choice3 === ""){
                    p1choice3 = parseInt(button.textContent);

                    button.textContent = player1.marker;

                    button.style.color = "red";
                }
                else if(p1choice1 !== "" && p2choice1 !== "" && p1choice2 !== "" && p2choice2 !== "" && p1choice3 !== "" && p2choice3 === ""){
                    p2choice3 = parseInt(button.textContent);

                    button.textContent = player2.marker;

                    button.style.color = "blue";
                }


                if(p1choice1 !== "" && p2choice1 !== "" && p1choice2 !== "" && p2choice2 !== "" && p1choice3 !== "" && p2choice3 !== ""){
                    
                    playTic(p1choice1,p2choice1,p1choice2,p2choice2,p1choice3,p2choice3);
                }

                



            });
        
        });
        
        

            
        

    }
    
}






displayLogic.displayRender();































/*

if (gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[3] == "X" && gameBoardObject.gameBoard[6] == "X"){

console.log("Player 1 Wins!")

} 
if(gameBoardObject.gameBoard[1] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[7] == "X"){
    console.log("Player 1 Wins!")
}

if(gameBoardObject.gameBoard[2] == "X" && gameBoardObject.gameBoard[5] == "X" && gameBoardObject.gameBoard[8] == "X"){
    console.log("Player 1 Wins")
}
if (gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[1] == "X" && gameBoardObject.gameBoard[2] == "X"){

    console.log("Player 1 Wins!")

} 
if(gameBoardObject.gameBoard[3] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[5] == "X"){
    console.log("Player 1 Wins")
}

if(gameBoardObject.gameBoard[6] == "X" && gameBoardObject.gameBoard[7] == "X" && gameBoardObject.gameBoard[8] == "X"){
    console.log("Player 1 Wins")
}

if(gameBoardObject.gameBoard[0] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[8] == "X"){
    console.log("Player 1 Wins")
}

if(gameBoardObject.gameBoard[2] == "X" && gameBoardObject.gameBoard[4] == "X" && gameBoardObject.gameBoard[6] == "X"){
    console.log("Player 1 Wins")
}


if (gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[3] == "O" && gameBoardObject.gameBoard[6] == "O"){

    console.log("Player 2 Wins!")

} 
if(gameBoardObject.gameBoard[1] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[7] == "O"){
    console.log("Player 2 Wins!")
}

if(gameBoardObject.gameBoard[2] == "O" && gameBoardObject.gameBoard[5] == "O" && gameBoardObject.gameBoard[8] == "O"){
    console.log("Player 2 Wins")
}
if (gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[1] == "O" && gameBoardObject.gameBoard[2] == "O"){

    console.log("Player 2 Wins!")

} 
if(gameBoardObject.gameBoard[3] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[5] == "O"){
    console.log("Player 2 Wins")
}

if(gameBoardObject.gameBoard[6] == "O" && gameBoardObject.gameBoard[7] == "O" && gameBoardObject.gameBoard[8] == "O"){
    console.log("Player 2 Wins")
}

if(gameBoardObject.gameBoard[0] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[8] == "O"){
    console.log("Player 2 Wins")
}

if(gameBoardObject.gameBoard[2] == "O" && gameBoardObject.gameBoard[4] == "O" && gameBoardObject.gameBoard[6] == "O"){
    console.log("Player 2 Wins")
}

*/