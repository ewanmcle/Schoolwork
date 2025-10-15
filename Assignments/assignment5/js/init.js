// these are the door objects
let door1, door2, door3;

function initGame() {
    // door constructor
    class Door {
        constructor() {
            this.prize = false;
            this.selected = false;
            this.eliminated = false;
        }
    }

    // initialize doors
    door1 = new Door();
    door2 = new Door();
    door3 = new Door();

    // assign prize to random door
    let prizeDoor = Math.floor(Math.random() * 3) + 1;
    if (prizeDoor === 1) {
        door1.prize = true;
    } else if (prizeDoor === 2) {
        door2.prize = true;
    } else {
        door3.prize = true;
    }

    // log doors to console for debug
    console.log(door1, door2, door3);
}

function startNewGame() {
    // reset game logic
    initGame();
    
    // reset visual appearance and click handlers
    resetDoorAppearance();
}

function resetDoorAppearance() {
    // remove eliminated class from all doors
    document.querySelector('.door:nth-child(1)').classList.remove('eliminated');
    document.querySelector('.door:nth-child(2)').classList.remove('eliminated');
    document.querySelector('.door:nth-child(3)').classList.remove('eliminated');
    
    // reset door images back to original doors
    document.getElementById('door1').src = "media/mhdoor1.png";
    document.getElementById('door2').src = "media/mhdoor2.png";
    document.getElementById('door3').src = "media/mhdoor3.png";
    
    // reset click handlers back to original selectDoor function
    document.getElementById('door1').onclick = () => selectDoor(1);
    document.getElementById('door2').onclick = () => selectDoor(2);
    document.getElementById('door3').onclick = () => selectDoor(3);
    
    // reset instructions
    document.getElementById('instructions').innerText = "Pick a door to start the game.";
}