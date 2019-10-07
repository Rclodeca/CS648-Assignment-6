const coinFlip = Math.floor(Math.random() * Math.floor(2));

const choice = window.prompt("Type heads or tails:");

const flipIsHeads = coinFlip === 0;

if(flipIsHeads && choice === "heads"){
    document.write("The flip was heads and you chose heads...you win!");
} 
else if(flipIsHeads && choice === "tails"){
    document.write("The flip was heads but you chose tails...you lose!");
}
else if(!flipIsHeads && choice === "heads"){
    document.write("The flip was tails but you chose heads...you lose!");
}
else if(!flipIsHeads && choice === "tails"){
    document.write("The flip was tails and you chose tails...you win!")
}
else {
    document.write("Something is wrong, did you type 'heads' or 'tails' ?");
}