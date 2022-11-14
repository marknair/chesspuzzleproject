let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎"]
let pawnShelf = document.getElementById("pawn-shelf")
let minorPiecesShelf = document.getElementById("minorpieces-shelf")
let rookShelf = document.getElementById("rook-shelf")
let royalShelf = document.getElementById("royal-shelf")

//  Write a function that will sort through the array and put the pieces on different 'shelves' in the DOM.
// 
//  You should use a for-loop, a conditional statement, and the textContent property.
// 
//  1. Pawns go on the pawn shelf.
//  2. Knights and bishops go on the minor pieces shelf.
//  3. Rooks go on the rook shelf.
//  4. The queen and king go on the royal shelf. 
 
 
function sortPieces() {
    for (let i = 0; i < chessPieces.length; i++) {
        if (chessPieces[i] === "♟︎") {
            pawnShelf.textContent += "♟︎"
        }  else if (chessPieces[i] === "♘") {
            minorPiecesShelf.textContent += "♘"
        } else if (chessPieces[i] === "♝") {
            minorPiecesShelf.textContent += "♝"
        } else if (chessPieces[i] === "♜") {
            rookShelf.textContent +=  "♜"
        } else if (chessPieces[i] === "♕") {
            royalShelf.textContent += "♕"
        } else if (chessPieces[i] === "♔") {
            royalShelf.textContent += "♔"
        }
    }
}

sortPieces()
