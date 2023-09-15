
const equations = {
    'pawn': 8,
    'pawnB': 9,
    'knight': [15, 17],
    'bishop': 9
};




let baseLocation = null;
let targetLocation = null;
let piece = null;
let pieceSelected = false;
let pieceClass = null;
let pieceId = null;
let baseLocationSelected = false;
let targetLocationSelected = false;

function move(equation) {
    let moveEquation = $(targetLocation).index() - $(baseLocation).index();
        if (equations[equation] === moveEquation) {
            $(targetLocation).append(piece);
        }
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
        
        piece = null;
    }
});

