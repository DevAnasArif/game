let userscore=0
let compscore=0
const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg") ;

const userscorepara = document.querySelector("#user-score") ;
const compscorepara = document.querySelector("#comp-score") ;


const drawgame = () => {
    console .log("Game was Drawed");
    msg.textContent=("Game was Drawed. Play Again");
    msg.style.backgroundColor="#081b31"
}

const gencompchoice = () =>{
    const option = ["rock","paper","scissors"] 
    const randidx= Math.floor(Math.random()*3)
    return option[randidx]
}


const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++
        userscorepara.innerHTML = userscore
        console.log("you win")
        msg.textContent= `You Win! Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compscore++
        compscorepara.innerHTML = compscore
        console.log("you loose")
        msg.textContent= `You lose! ${compchoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor="red"
    }
}

const playgames = (userchoice) =>{
    console.log("User Choice =",userchoice)
    const compchoice = gencompchoice()
    console.log("Comp Choice =",compchoice)
    if(userchoice === compchoice){
        drawgame()
    }
    else{
        let userwin = false;

        if (userchoice === "rock") {
            //scissors,paper
            if (compchoice === "paper") {
                userwin = false;
            } else if (compchoice === "scissors") {
                userwin = true;
            }
        }
         else if (userchoice === "paper") {
             //scissors,rock
            if (compchoice === "rock") {
                userwin = true;
            } else if (compchoice === "scissors") {
                userwin = false;
            }
        }
         else if (userchoice === "scissors") {
             //rock,paper
            if (compchoice === "rock") {
                userwin = false;
            } else if (compchoice === "paper") {
                userwin = true;
            }
        }
        showwinner(userwin,userchoice,compchoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgames(userchoice)
    })
})