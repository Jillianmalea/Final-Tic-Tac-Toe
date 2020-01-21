//.cell just like .cell is a class, because it is a class and is referenced in css as a .
let cells = document.querySelectorAll('.cell');
let shape = "X";
let cellCount = 0;
// this is the winning combinations not the 0-8(1-9) 
let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];
// we're looping through each div with a class of "cell" using an event listener which listens for a click (interactivity) when it hears one it runs click cell
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', clickCell)
}
// if (condition) is met, {run this code} if cells.target.textContet equals nothing, then run this code.
//cells.target.textContent = shape. 1= is setting, 2= is equalling? 3 = checks type
function clickCell(cell) {
    if (cell.target.textContent == '') {
        cell.target.textContent = shape
        checkWin()

    }
    // after event listener listens for a click, it checks if shape ='s "x", and since shape does = "x" (first turn) it sets next turn for "0"
    if (shape == 'X') {
        shape = "O"
    } else { shape = "X" }

    //if the wins[i][j] (which is the cell we are currently on) = shape, win counter goes up 
}
function checkWin() {
    cellCount++
    for (i = 0; i < wins.length; i++) {
        let winCounter = 0
        for (j = 0; j < wins[i].length; j++) {
            if (wins[i][j].innerHTML == shape) {
                winCounter++
                if (winCounter == 3) {
                    alert(shape + ' TOTALLY WINS')
                    reset()

                }
                else if (cellCount == 9 && winCounter == 3) {
                    alert(shape + 'DRAW')
                    reset()
                }
                else if (cellCount == 9 && winCounter != 3) {
                    cellCount = 0
                    alert("TIE")
                    reset()
                }

            }
        }
    }
}
function reset(){
    for (i=0; i< cells.length; i++){
        cells [i].innerHTML= ''
        shape ='X'
        cellCount = 0
    }
}