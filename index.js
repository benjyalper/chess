let selectedImage = null;
let selectedSquare = null;
let highlighted = false;


// $('.square').on('click', function() {
//     const square = $(this).closest('.square');
//     // $(square).css('margin', '5px');
//     $(square).css('border', '5px solid yellow');
//     // $(square).css('background-color', 'black');
// });



$('.square').on('click', function(){
    // selectedImage = $(this.closest('img'));
    // $(selectedImage).css('height', '50px');
    // location.reload();
    // $(this).addClass('selectedSquare');
    // highlighted = true;
    // if (highlighted === false) {
    //     $(this).addClass('selectedSquare');
    //     highlighted = true;
    // } '
    $('img').on('click', function() {
        selectedImage = $(this.closest('img'));
    });

    if (selectedImage !== null) {
        selectedSquare = this.closest('.square');
        $(selectedSquare).append(selectedImage);
    }
    
    

    // setTimeout (function () {
    //     $(highlighted).removeClass('selectedSquare');
    // }), 1000; 
    // selectedImage = null;
    alert(selectedImage)
});
