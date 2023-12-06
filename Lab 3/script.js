var cells = document.querySelectorAll('.cell');
var current = 'X';

cells.forEach(function(cell) {
    cell.onclick = function() {
        if (cell.textContent === '') {
            cell.textContent = current;
            current = current === 'X' ? 'O' : 'X';
        }
    };
});

function restartGame() {
    cells.forEach(function(cell) {
        cell.textContent = '';
    });
    current = 'X';
}