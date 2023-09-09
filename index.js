let selectedImage = null;

$('.square').on('click', function() {
    const square = $(this).closest('.square');
    // $(square).css('margin', '5px');
    $(square).css('border', '5px solid yellow');
    // $(square).css('background-color', 'black');
});

$('img').on('click', function() {
    const clickedImg = $(this.closest('img'));
    if (selectedImage === null) {
        selectedImage = clickedImg;
        // selectedImage = $(this).closest('img');
    } else {
        // This is the second click, move the selected image to the clicked square
        const targetSquare = $(this).closest('.square');
        targetSquare.empty().append(selectedImage);
        selectedImage = null; // Reset the selected image
    }
});