(function() {
  $('[ripple]').on('mousedown', function(e) {
    var $posX, $posY, $ripple, $rippleColor, $rippleDuration, $rippleSize;
    e.preventDefault;
    $ripple = $('<div />', {
      "class": 'ripple-effect'
    });
    $rippleColor = $(this).attr('ripple-color');
    $rippleSize = $(this).attr('ripple-size');
    if ($rippleSize) {
      $rippleSize = $rippleSize;
    } else {
      $rippleSize = 200;
    }
    $rippleDuration = $(this).attr('ripple-duration');
    $posX = $(this).offset().left + ($rippleSize / 2);
    $posY = $(this).offset().top + ($rippleSize / 2);
    $ripple.appendTo(this);
    $ripple.css({
      'background': $rippleColor,
      'top': e.pageY - $posY,
      'left': e.pageX - $posX,
      'width': $rippleSize,
      'height': $rippleSize,
      'animation-duration': $rippleDuration + 's'
    });
    return setTimeout((function() {
      return $ripple.remove();
    }), $rippleDuration * 1000);
  });

}).call(this);
