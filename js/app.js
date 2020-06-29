$(nav a).click(function(e){
    e.preventDefaoult();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 500);
 });