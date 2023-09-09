$('.square').on('click', function() {
    const square = $(this).closest('.square');
    $(square).css('border', '5px solid yellow');
    // $(square).css('background-color', 'black');
})