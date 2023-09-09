let selectedImage = null;
let selectedSquare = null;


// $('.square').on('click', function() {
//     const square = $(this).closest('.square');
//     // $(square).css('margin', '5px');
//     $(square).css('border', '5px solid yellow');
//     // $(square).css('background-color', 'black');
// });

$('img').on('click', function() {
    selectedImage = $(this.closest('img'));
        // selectedImage = $(this).closest('img');
});

$('.square').on('click', function(){
    if (selectedImage !== null) {
        selectedSquare = this.closest('.square');
        $(selectedSquare).append(selectedImage);
    }
    // selectedImage = null;
});