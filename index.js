
const pieces = ['pawnA7', 'pawnB7']
const move = function (pieceId) {
    $(targetLocation).append(piece);
    if (pieceId === pieces[0]) {
        alert($(targetLocation).index());
    }
}
let baseLocation = null;
let targetLocation = null;
let piece = null;
let pieceSelected = false;
let baseLocationSelected = false;
let targetLocationSelected = false;


let occupied = [];

$('.board').on('click', 'img', function() {
    piece = this;
    baseLocation = this.closest('.square');  
});

$('.board').on('click', '.square', function() {
    if (this !== baseLocation) {
        targetLocation = this;
        $(targetLocation).append(piece);
        occupied.push(targetLocation);
        // alert(occupied);
        piece = null;
    }
});



// const nthChild = 1;

// $('.square').on('click', function() {
//     // alert($(this).index());
//     move('pawnA7');
// });