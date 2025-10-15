function selectDoor(selectedDoor) {

    // change selected flag on selected door & log to console for debug
    if (selectedDoor === 1) {
        door1.selected = true;
        console.log("Door 1 selected");
    } else if (selectedDoor === 2) {
        door2.selected = true;
        console.log("Door 2 selected");
    } else {
        door3.selected = true;
        console.log("Door 3 selected");
    }

    // eliminate door that != prize && != selected, change eliminated flag & log
    if (door1.selected) {
        if (!door2.prize) {
            door2.eliminated = true;
            console.log("Door 2 eliminated");
        } else {
            door3.eliminated = true;
            console.log("Door 3 eliminated");
        }
    } else if (door2.selected) {
        if (!door1.prize) {
            door1.eliminated = true;
            console.log("Door 1 eliminated");
        } else {
            door3.eliminated = true;
            console.log("Door 3 eliminated");
        }
    } else {
        if (!door1.prize) {
            door1.eliminated = true;
            console.log("Door 1 eliminated");
        } else {
            door2.eliminated = true;
            console.log("Door 2 eliminated");
        }
    }

    // check eliminated flag and update the door's appearance
    updateRoundOne();

    // give player a chance to change their guess
    switchDoors();
}

// add grayscale and opacity to eliminated door
function updateRoundOne() {

    // find selected door element
    const doors = [
        { door: door1, element: document.querySelector('.door:nth-child(1)') },
        { door: door2, element: document.querySelector('.door:nth-child(2)') },
        { door: door3, element: document.querySelector('.door:nth-child(3)') }
    ];

    // update eliminated door appearance
    doors.forEach(({ door, element }) => {
        if (door.eliminated) {
            element.classList.add('eliminated');
        } else {
            element.classList.remove('eliminated');
        }
    });
}

function switchDoors() {
    // new game instructions
    document.getElementById('instructions').innerText = "Switch or Stay? Select a door.";

    // reveal win or lose
    document.getElementById('door1').onclick = () => selectionFinal(1);
    document.getElementById('door2').onclick = () => selectionFinal(2);
    document.getElementById('door3').onclick = () => selectionFinal(3);
}