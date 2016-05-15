//##############################################################################
// jQuery
//##############################################################################

$('#color-target').css("color","green");

$('#move-target').css({
  position: 'relative',
  top: '+15px',
  left: '+15px'
});

$('#prepend-target').prepend("<");

if (($('#condition-target').text() % 2) == 0) {
  $('#condition-target').css("color","blue")
}
else {
  $('#condition-target').css("color","purple")
}


//##############################################################################
// jQuery and Events
//##############################################################################

$('#click-target').on('click', function(e) {
  // This is the DOM element that was clicked
  var $target = $(e.target);

  $target.toggleClass('coolness');
});

$('.letter-b').hover(
  function(e) { var $target = $(e.target); $target.addClass('letter-b') },
  function(e) { var $target = $(e.target); $target.removeClass('letter-b') }
);

//##############################################################################
// jQueryUI
//##############################################################################

// Your code goes here!

$('#accordion').accordion();

$('#flying-kid').draggable({
  addClasses: false
});
