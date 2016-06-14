$(document).ready(function() {

  var $modal = $('#category-modal'),
      $body = $('body'),
      $activateBtn = $('#all-categories'),
      $category = $('.category');
      $catDesc = $('#category-description');
      $catDescDiv = $catDesc.find('div');

  $('#all-categories').on('click', function() {
    $activateBtn.fadeOut(400, function() {
      $modal.fadeIn(400).addClass('active');
      $body.addClass('modal-active');
    });
  });

  $('.close-modal>span').on('click', function() {
    $modal.fadeOut(400, function() {
      $activateBtn.fadeIn(400);
      $body.removeClass('modal-active');
    }).removeClass('active');
  });

  $category.on('mouseover', function() {
    var $this = $(this);
    var contentQueue = $catDescDiv.queue();
    if (!$this.hasClass('active')) {
      $catDescDiv.queue([]);
      $category.removeClass('active');
      $this.addClass('active');
      var titleIndex = $category.index($this);
      var newTitle = categories[titleIndex]['title'],
          newContent = categories[titleIndex]['content'];
      $catDescDiv.stop().animate({'marginTop': '470px'}, 400, function() {
        $catDesc.find('h2').text(newTitle);
        $catDesc.find('p').text(newContent);
      });
      $catDescDiv.animate({'marginTop': '-470px'}, {duration: 0, queue: true, complete: function() {
        $catDescDiv.animate({'marginTop': '0px'}, 400);
      }});
    };
  });

  // dynamically position some elements for better mobile usability/layout
  var $windowHeight = $(window).innerHeight(); // height of screen
  var $activateBtnHeight = $activateBtn.outerHeight(); // height of button, shouldn't change, but would rather not hardcode
  var $modalHeight = $modal.outerHeight();
  var aactivateBtnMarginTop = (2 * $windowHeight / 5) - $activateBtnHeight;
  $activateBtn.css({'marginTop': aactivateBtnMarginTop}).fadeIn(300);

});
