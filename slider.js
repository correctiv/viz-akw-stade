var ACTIVE_SLIDE = 1;

function getSlide(slide) {
  // $('#akw-slide').html('');
  $('#akw-slide-' + ACTIVE_SLIDE).removeClass('--akw-slide-visible');
  ACTIVE_SLIDE = slide < 1 ? 8 : slide > 8 ? 1 : slide;
  $('#akw-slide-' + ACTIVE_SLIDE).addClass('--akw-slide-visible');
}

getSlide(ACTIVE_SLIDE);

$('#akw-slider__btn-prev').click(function() {
  getSlide(ACTIVE_SLIDE - 1);
});

$('#akw-slider__btn-next').click(function() {
  getSlide(ACTIVE_SLIDE + 1);
});
