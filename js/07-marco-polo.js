for(let i = 1; i < 101; i++){
    let result = i;
    if((i % 15) === 0){
        result = "Marco! Polo!";
    } 
    else if((i % 5) === 0){
        result = "Polo!";
    }
    else if((i % 3) === 0){
        result = "Marco!"
    }
    window.console.log(result);
}