const p1Score = document.querySelector(".scoreP1");
const p2Score = document.querySelector(".scoreP2");
const addP1 = document.querySelector(".addP1");
const addP2 = document.querySelector(".addP2");
const formMaxScore = document.querySelector(".formMaxScore");
const resetBut = document.querySelector(".resetBut");
const announceWinner = document.querySelector(".announce")
let winner;

const winnerLoser = (winner, loser) => {
    winner.classList.toggle("has-text-success");
    loser.classList.toggle("has-text-danger");
}

const addNumber = (button, score) => {
    button.addEventListener('click', ()=>{
        let x = parseInt(score.innerText);
        x++;
        score.innerText = x;
        if(x == formMaxScore.elements.maxScore.value)
        {   
            if(score === p1Score)
            {
                winnerLoser(p1Score, p2Score);
                winner = "Player 1";
            }
            else
            {
                winnerLoser(p2Score, p1Score);
                winner = "Player 2";
            }
            announceWinner.innerText = `The winner is ${winner}`
            addP1.setAttribute("disabled","");
            addP2.setAttribute("disabled","");
        }
    })
}

const reset = (score) => {
    score.innerText = "0";
    if(winner !== undefined)
    {
        score.classList.toggle(score.classList[score.classList.length-1]);
        announceWinner.innerText = "Use the buttons below to keep scores";
    }
}

resetBut.addEventListener("click", () => {
    reset(p1Score);
    reset(p2Score);
    
    winner = undefined;

    if(addP1.getAttribute('disabled') !== null && addP2.getAttribute('disabled') !== null)
    {
        addP1.attributes.removeNamedItem("disabled");
        addP2.attributes.removeNamedItem("disabled")
    }
})

addNumber(addP1, p1Score); 
addNumber(addP2, p2Score);