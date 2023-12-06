var cells = document.querySelectorAll('.cell');
var current = 'X';

var scores = { 'X': 0, 'O': 0 };
var scoreX = document.getElementById('scoreX');
var scoreO = document.getElementById('scoreO');

cells.forEach(function(cell) {
    cell.onclick = function() {
        if (cell.textContent === '') {
            cell.textContent = current;

            if (checkWinner(current)) {
                alert(current + ' wins!');
                scores[current]++
                
                updatescore();
                restartGame();
            }

            else if (isTie()) {
                alert('It\'s a tie!');
                restartGame();
            }

            if (current === 'X') {
                current = 'O';
            } else {
                current = 'X';
            }
        }
    };
});

function restartGame() {
    cells.forEach(function(cell) {
        cell.textContent = '';
    });
    current = 'X';
}

function checkWinner(player) {
    return (
        // rows
        (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) ||
        (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) ||
        (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) ||

        // columns
        (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) ||
        (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) ||
        (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) ||

        // diags
        (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
        (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
    );
}

function isTie() {
    return Array.from(cells).every(function(cell) {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
}

function updatescore() {
    scoreX.textContent = 'X: ' + scores['X'];
    scoreO.textContent = 'O: ' + scores['O'];
}

updatescore();
