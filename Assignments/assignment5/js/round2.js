// ======================================Round 2======================================

function selectionFinal(finalDoor) {

    // check if selected door has prize
    let win = false;
    if (finalDoor === 1 && door1.prize) {
        win = true;
    } else if (finalDoor === 2 && door2.prize) {
        win = true;
    } else if (finalDoor === 3 && door3.prize) {
        win = true;
    }

    // update instructions and images based on win/lose
    if (win) {
        document.getElementById('instructions').innerText = "You Win! Click a door to play again."
        // show car image on the winning door (the door that has the prize)
        if (door1.prize) {
            document.getElementById('door1').src = "media/mhcar.png";
        } else if (door2.prize) {
            document.getElementById('door2').src = "media/mhcar.png";
        } else if (door3.prize) {
            document.getElementById('door3').src = "media/mhcar.png";
        }
    } else {
        document.getElementById('instructions').innerText = "You Lose! Click the door to play again."
        // show lost car image on the door the player chose
        document.getElementById(`door${finalDoor}`).src = "media/mhlostCar.png";
    }

    // set up click handlers to start  new gmae when user clicks door
    document.getElementById('door1').onclick = () => startNewGame();
    document.getElementById('door2').onclick = () => startNewGame();
    document.getElementById('door3').onclick = () => startNewGame();
}