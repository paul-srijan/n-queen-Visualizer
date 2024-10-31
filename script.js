let boardSize;
let board = [];
let visualBoard;
let delay = 500;  // Delay in milliseconds for visualization

async function startVisualization() {
    boardSize = parseInt(document.getElementById("board-size").value);
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    createBoard();
    await solveNQueens(0);
}

function createBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = '';
    boardElement.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
    visualBoard = [];

    for (let i = 0; i < boardSize; i++) {
        let row = [];
        for (let j = 0; j < boardSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square", (i + j) % 2 === 0 ? "white" : "black");
            boardElement.appendChild(square);
            row.push(square);
        }
        visualBoard.push(row);
    }
}

function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) return false;
        if (col - (row - i) >= 0 && board[i][col - (row - i)] === 1) return false;
        if (col + (row - i) < boardSize && board[i][col + (row - i)] === 1) return false;
    }
    return true;
}

async function solveNQueens(row) {
    if (row === boardSize) return true;

    for (let col = 0; col < boardSize; col++) {
        if (isSafe(row, col)) {
            board[row][col] = 1;
            visualBoard[row][col].innerHTML = '♛';
            visualBoard[row][col].classList.add("queen");
            await pause();

            if (await solveNQueens(row + 1)) return true;

            board[row][col] = 0;
            visualBoard[row][col].innerHTML = '';
            visualBoard[row][col].classList.remove("queen");
            await pause();
        }
    }
    return false;
}

function pause() {
    return new Promise(resolve => setTimeout(resolve, delay));
}
