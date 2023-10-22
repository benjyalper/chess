
const equations = {
    'pawn': [7, 8, 9, -8, -9, -7],
    'knight': [6, -6, 10, -10, 15, -15, 17, -17],
    // 'bishop': [7, -7, 14, -14, 21, -21, 28, -28, 35, -35, 42, -42, 49, -49,
    //         9, -9, 18, -18, 27, -27, 36, -36, 45, -45, 54, -54, 63, -63]
    'bishop': [7, 14, 21, 28, 35, 42, 49, 56, 63, 9, 18, 27, 36, 45, 54, 72, 81, -7, -14, -21, -28, -35, -42, -49, -56, -63]
};

// const borders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56]
const borders = [`.square:eq(16)`]




let baseLocation = null;
let targetLocation = null;
let piece = null;
let pieceSelected = false;
let pieceClass = null;
let pieceId = null;
let baseLocationSelected = false;
let targetLocationSelected = false;
let baseIndex = $(baseLocation).index();
let potentialMoves = [];

// let bishopEquation = 7 * 1n;


function move(pieceName) {
    let moveEquation = $(targetLocation).index() - $(baseLocation).index();
}     


let occupied = [1, 2, 3, 4];

$('.board').on('click', 'img', function() {
    piece = this;
    pieceClass = $(this).attr("class");
    pieceId = $(this).attr("id");
    baseLocation = this.closest('.square'); 
    baseIndex = $(baseLocation).index();
    for (let i = 0; i <= occupied.length; i++) {
        let options = baseIndex +=7;
        potentialMoves.push(`.square:eq(${options})`);
        alert(potentialMoves)
        $(potentialMoves[i]).css('border', '5px solid #b5f343');
        if (potentialMoves[i] in borders) {//the problem is that potentialMoves[i] is in borders
            break; 
        }

    }
    

    // if (pieceClass === 'bishop') {
    //     let options = equations['bishop'];
    //     for (let i = 0; i < options.length; i++) {
    //         let highlighted = baseIndex + options[i];
    //         let leftBoundry = baseIndex * 8;
    //         let factor = 8 - baseIndex;
    //         let rightBoundry = factor * 8 - 1;
    //         let negativeLeftBoundry = baseIndex / 8;
    //         // alert(highlighted)
    //         if (options[i] % 7 === 0 && highlighted <= leftBoundry) {
    //             $(`.square:eq(${highlighted})`).css('border', '5px solid #b5f343');
    //         } else if (options[i] % 9 === 0 && highlighted <= rightBoundry) {
    //             $(`.square:eq(${highlighted})`).css('border', '5px solid #b5f343');
    //         } 
    //     }
    // }
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

