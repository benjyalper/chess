$('.board').on('click', function() {
    const square = $(this).closest('.square');
    $(square).css('border-radius', '5px');
})