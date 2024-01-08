let score1 = 0;
let score2 = 0;
let seconds = 10;
let winner = '';
let timerInterval;

const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const gameClock = document.getElementById('gameClock');
const winnerElement = document.getElementById('winnerText');
const startTimerButton = document.getElementById('startTimer');
const resetTimerButton = document.getElementById('resetTimer');

async function fetchData() {
    let response = await fetch('teams.json');
    let data = await response.json();
    const [t1, t2] = data;
    document.getElementById('team1Name').innerHTML = t1.name;
    document.getElementById('team2Name').innerHTML = t2.name;
}

function updateScore(team, points) {
    if (timerInterval) {
        if (team === 'team1') {
            score1 += points;
            score1Element.textContent = score1;
        } else if (team === 'team2') {
            score2 += points;
            score2Element.textContent = score2;
        }
    }
}

function startCountdown() {
    fetchData();
    timerInterval = setInterval(function () {
        seconds--;
        if (seconds < 0) {
            seconds = 0;
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        gameClock.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

        if (seconds === 0) {
            clearInterval(timerInterval);
            if (score1 > score2) {
                winner = 'Team 1';
            } else if (score2 > score1) {
                winner = 'Team 2';
            } else {
                winner = "It's a tie!";
            }
            winnerElement.textContent = `Winner: ${winner}`;
        }
    }, 1000);
}

startTimerButton.addEventListener('click', () => {
    if (!timerInterval) {
        startCountdown();
    }
});

resetTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 10; // Reset the timer to 10 minutes (600 seconds)
    const minutes = Math.floor(seconds / 60);
    gameClock.textContent = `${minutes}:00`;
    winnerElement.textContent = 'No winner yet.';
    score1 = 0;
    score2 = 0;
    score1Element.textContent = '0';
    score2Element.textContent = '0';
});

document.querySelectorAll('.addScore').forEach(button => {
    button.addEventListener('click', function () {
        const team = this.getAttribute('data-team');
        const points = parseInt(this.getAttribute('data-points'));
        updateScore(team, points);
    });
});
