let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎", "Spanky"]
let pawnShelf = document.getElementById("pawn-shelf")
let minorPiecesShelf = document.getElementById("minorpieces-shelf")
let rookShelf = document.getElementById("rook-shelf")
let royalShelf = document.getElementById("royal-shelf")

function sortPieces() {
    for (let i = 0; i < chessPieces.length; i++) {
        if (chessPieces[i] === "♟︎") {
          pawnShelf.textContent += "♟︎"
        } else if (chessPieces[i] === "♘") {
          minorPiecesShelf.textContent += "♘"
        } else if (chessPieces[i] === "♝") {
          minorPiecesShelf.textContent += "♝"
        } else if (chessPieces[i] === "♜") {
          rookShelf.textContent += "♜"
        } else if (chessPieces[i] === "♕") {
          royalShelf.textContent += "♕"
        } else if (chessPieces[i] === "♔") {
          royalShelf.textContent += "♔"
        } else if (chessPieces[i] === "Spanky") {
            royalShelf.textContent += "It's Spanky!"
        }
    }
}

sortPieces()
