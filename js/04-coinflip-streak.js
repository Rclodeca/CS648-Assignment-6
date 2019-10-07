let coinFlip;

do {
    coinFlip = Math.floor(Math.random() * Math.floor(2));
    const result = coinFlip === 0 ? "Heads" : "Tails";
    window.console.log(result);
} while(coinFlip === 0);