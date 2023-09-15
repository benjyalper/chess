const equations = {
    'pawnA': 8,
    'pawnB': 9,
    'knight': [15, 17, 19],
    'bishop': [9]
};

const arr = [1, 2, 3];

function move() {
    for (let pieceName in equations) {
        if (pieceName === 'knight') {
            for (number in equations[pieceName]) {
                let moveOptions = equations[equation][number];
                console.log(moveOptions);
            }
        } else if (equation === 'bishop'){
            for (number in equations[equation]) {
                let moveOptions = equations[equation][number];
                console.log(moveOptions);
            }
        }
    }
}


move();
