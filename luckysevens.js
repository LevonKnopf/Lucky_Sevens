function rollDice(e) {
  e.preventDefault();
    let bet = document.getElementById("startingBet").value;
    let rollCount = 0;
    if (bet < 1) {
      alert("You must place a bet of at least 1 dollar");
      return false;
    } 
    else {
        let winArray = [Number(bet)];
        let gameMoney = Number(bet);
    while (gameMoney > .99) {        
        let snake = Math.floor(Math.random() * 6) +1;
        let eyes = Math.floor(Math.random() * 6) +1;
        let total = snake + eyes;
        rollCount++;
        if (total === 7) {
            gameMoney += 4;
            winArray.push(+gameMoney);
        }
        else {
            gameMoney--;
            winArray.push(gameMoney);
        }
    
    }
    document.getElementById("startBet").innerText = "$" + Number(bet).toFixed(2);
    document.getElementById("totalRolls").innerText = rollCount;
    document.getElementById("pinacle").innerText = "$" + Math.max(...winArray).toFixed(2);
    document.getElementById("highRollCount").innerText = winArray.indexOf(Math.max(...winArray));
    document.getElementById("startingBet").value = null;
    document.getElementById("play").innerText = "Play Again"; 

    }
    if (bet > 0) {
      document.getElementById("hide").style.display = "block";
    }
    else {
      document.getElementById("hide").style.display = "none";
    }
 

}
