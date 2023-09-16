
const equations = {
    'pawn': [7, 8, 9, -8, -9, -7],
    'knight': [6, -6, 10, -10, 15, -15, 17, -17],
    'bishop': [7, -7, 14, -14, 21, -21, 28, -28, 35, -35, 42, -42, 49, -49,
            9, -9, 18, -18, 27, -27, 36, -36, 45, -45, 54, -54, 63, -63]
};




let baseLocation = null;
let targetLocation = null;
let piece = null;
let pieceSelected = false;
let pieceClass = null;
let pieceId = null;
let baseLocationSelected = false;
let targetLocationSelected = false;
// let bishopEquation = 7 * 1n;


function move(pieceName) {
    let moveEquation = $(targetLocation).index() - $(baseLocation).index();
    let optionsArray = []
    for (number in equations[pieceName]) {
        let moveOptions = equations[pieceName][number];
        optionsArray.push(moveOptions);
        for (option in optionsArray) {
            if (optionsArray[option] === moveEquation)
                $(targetLocation).append(piece);
        }
    }
} 
    


function openMove() {
    $(targetLocation).append(piece);
}
            


let occupied = [];

$('.board').on('click', 'img', function() {
    piece = this;
    pieceClass = $(this).attr("class");
    pieceId = $(this).attr("id");
    baseLocation = this.closest('.square');  
});

$('.board').on('click', '.square', function() {
    if (this !== baseLocation) {
        targetLocation = this;
        move(pieceClass);
        move(pieceId);
        // openMove();        
        piece = null;
    }
});

