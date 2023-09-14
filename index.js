
const equations = {
    'pawn': 8, 
    'pawnB': 9
};


// function move() {
//     const moveEquationn = $(targetLocation).index() - $(baseLocation).index();
//     if (moveEquationn === 8) {
//         alert(moveEquationn);
//     }
// }




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
        // let moveEquation = $(targetLocation).index() - $(baseLocation).index();
        // if (moveEquation === 9 || moveEquation === 7 || moveEquation === 9) {
        //     $(targetLocation).append(piece);
        // }
        // occupied.push(targetLocation);
        move(pieceClass);
        move(pieceId);
        
        piece = null;
    }
});



// const nthChild = 1;

// $('.square').on('click', function() {
//     // alert($(this).index());
//     move('pawnA7');
// });