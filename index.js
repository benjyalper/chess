let moves = [];
let selectedLocation = null;
let targetLocation = null;
let selectedPiece = null;
let selectedPieceClass = null;
let targetPiece = null;
let targetPieceClass = null;
let selectedPieceColor = null; // Declare selectedPieceColor globally
let targetPieceColor = null; // Declare targetPieceColor globally

// Rest of your code remains unchanged


const locations = {
    0: 'a8', 1: 'b8', 2: 'c8', 3: 'd8', 4: 'e8', 5: 'f8', 6: 'g8', 7: 'h8',
    8: 'a7', 9: 'b7', 10: 'c7', 11: 'd7', 12: 'e7', 13: 'f7', 14: 'g7', 15: 'h7',
    16: 'a6', 17: 'b6', 18: 'c6', 19: 'd6', 20: 'e6', 21: 'f6', 22: 'g6', 23: 'h6',
    24: 'a5', 25: 'b5', 26: 'c5', 27: 'd5', 28: 'e5', 29: 'f5', 30: 'g5', 31: 'h5',
    32: 'a4', 33: 'b4', 34: 'c4', 35: 'd4', 36: 'e4', 37: 'f4', 38: 'g4', 39: 'h4',
    40: 'a3', 41: 'b3', 42: 'c3', 43: 'd3', 44: 'e3', 45: 'f3', 46: 'g3', 47: 'h3',
    48: 'a2', 49: 'b2', 50: 'c2', 51: 'd2', 52: 'e2', 53: 'f2', 54: 'g2', 55: 'h2',
    56: 'a1', 57: 'b1', 58: 'c1', 59: 'd1', 60: 'e1', 61: 'f1', 62: 'g1', 63: 'h1'
};

function move() {
    if ($(targetLocation).children().length > 0) {
        const targetPieceColor = $(targetLocation).children().data("color");

        // If there is a piece in the target square and it's an opponent's piece, remove it
        if (targetPieceColor !== selectedPieceColor) {
            $(targetLocation).children().remove();
        } else {
            // If the target piece is of the same color, do not remove it and reset selectedPiece
            selectedPiece = null;
            return;
        }
    }
    // Move the selected piece to the target location
    $(targetLocation).append(selectedPiece);
    $(selectedLocation).empty(); // Remove the selected piece from its original position
}



// Rest of your code...

// Rest of your code...
// ... (your existing code)

// ... (your existing code)

$('.board').on('click', '.square', function () {
    if (selectedLocation === null) {
        selectedLocation = this;
        $(selectedLocation).addClass('selectedSquare');
    } else {
        // Check if the clicked square is the same as the selected square
        if (selectedLocation === this) {
            // Clicked the same square again, do nothing
            return;
        }

        $(selectedLocation).removeClass('selectedSquare');
        targetLocation = this;
        // Check if the target square is occupied by an opponent's piece
        const targetPieceColor = $(targetLocation).children().data("color");
        if (targetPieceColor !== selectedPieceColor) {
            // Opponent's piece present, remove it
            $(targetLocation).children().remove();
        } else {
            // Target square has a piece of the same color, do not remove it
            // Reset selected piece and target piece
            selectedPiece = null;
            targetPiece = null;
            selectedLocation = null;
            return;
        }
        // Move the selected piece to the target location
        $(targetLocation).append(selectedPiece);
        $(selectedLocation).empty(); // Remove the selected piece from its original position
        // Get the chess move (for example: "Pb4")
        const pieceType = selectedPieceClass.charAt(0).toUpperCase();
        const targetIndex = $(targetLocation).index();
        const targetRow = 8 - Math.floor(targetIndex / 8);
        const targetColumn = String.fromCharCode(97 + (targetIndex % 8));
        const chessMove = pieceType + targetColumn + targetRow;
        alert("Chess Move: " + chessMove);
        selectedLocation = null; // Reset selected location
        selectedPiece = null; // Reset selected piece
    }
});

// ... (your existing code)


$('.board').on('click', 'img', function () {
    if (selectedPiece === null) {
        selectedPiece = this;
        selectedPieceClass = $(this).attr("class");
        selectedPieceColor = $(this).data("color"); // Set selected piece color here
        alert("Selected Piece Class: " + selectedPieceClass + "\nSelected Piece Color: " + selectedPieceColor);
    } else {
        // Check if the clicked piece is of the same color as the selected piece
        if ($(this).data("color") === selectedPieceColor) {
            // Clicked on a piece of the same color, set it as the new selected piece
            selectedPiece = this;
            selectedPieceClass = $(this).attr("class");
            selectedPieceColor = $(this).data("color"); // Set selected piece color here
            alert("Selected Piece Class: " + selectedPieceClass + "\nSelected Piece Color: " + selectedPieceColor);
        } else {
            // Clicked on a piece of a different color, do nothing
            return;
        }
    }
});
