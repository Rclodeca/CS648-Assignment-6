let coinFlip;

for(let i = 0; i < 10; i++){
    coinFlip = Math.floor(Math.random() * Math.floor(2));
    const result = coinFlip === 0 ? "Heads" : "Tails";
    window.console.log(result);
}