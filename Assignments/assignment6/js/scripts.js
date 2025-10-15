document.getElementById('pace-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const time = document.getElementById('time').value;

    calculatePace(distance, time);
});

// believe it or not, this function will calculate the pace
function calculatePace(distance, time) {
    const [minutes, seconds] = time.split(":").map(Number);
    const pacePerMile = minutes + seconds / 60;
    
    generatePaceTable(distance, pacePerMile);
    
    return pacePerMile;
}

function generatePaceTable(totalDistance, pacePerMile) {
    const tableBody = document.getElementById('pace-table-body');
    const resultsDiv = document.getElementById('pace-results');

    tableBody.innerHTML = '';
    
    const wholeMiles = Math.floor(totalDistance);
    
    // create row for each mile
    for (let mile = 1; mile <= wholeMiles; mile++) {
        const row = document.createElement('tr');
        
        // distance column shows mile number
        const distanceCell = document.createElement('td');
        distanceCell.textContent = mile;
        
        // time column shows time at this mile
        const timeCell = document.createElement('td');
        const cumulativeTime = mile * pacePerMile;
        timeCell.textContent = formatTimeHMS(cumulativeTime);
        
        row.appendChild(distanceCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    }

    // add final distance if not a whole number
    if (totalDistance > wholeMiles) {
        const row = document.createElement('tr');
        
        // distance column shows exact final distance
        const distanceCell = document.createElement('td');
        distanceCell.textContent = totalDistance.toFixed(1);
        
        // time column shows total time for entire run
        const timeCell = document.createElement('td');
        const totalTime = totalDistance * pacePerMile;
        timeCell.textContent = formatTimeHMS(totalTime);
        
        row.appendChild(distanceCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    }
    
    resultsDiv.style.display = 'block';
}

// format the time correctly
function formatTime(timeInMinutes) {
    const minutes = Math.floor(timeInMinutes);
    const seconds = Math.round((timeInMinutes - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// convert minutes to hhmmss
function formatTimeHMS(timeInMinutes) {
    const totalSeconds = Math.round(timeInMinutes * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

