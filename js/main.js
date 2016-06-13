$(document).ready(function() {

  var $modal = $('#category-modal'),
      $body = $('body'),
      $activateBtn = $('#all-categories'),
      $category = $('.category');

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
    var $this = $(this),
        $catDesc = $('#category-description')
        $catDescDiv = $catDesc.find('div');
    if (!$this.hasClass('active')) {
      $category.removeClass('active');
      $this.addClass('active');
      var titleIndex = $category.index($this);
      var newTitle = categories[titleIndex]['title'],
          newContent = categories[titleIndex]['content'];
      $catDescDiv.animate({'marginTop': '+=450px'}, function() {
        $catDesc.find('h2').text(newTitle);
        $catDesc.find('p').text(newContent);
      });
      $catDescDiv.animate({'marginTop': '-=900px'}, {duration: 0, complete: function() {
        $catDescDiv.animate({'marginTop': '+=450px'});
      }});
    };
  });

  // dynamically position some elements for better mobile usability/layout
  var $windowHeight = $(window).innerHeight(); // height of screen
  var $activateBtnHeight = $activateBtn.outerHeight(); // height of button, shouldn't change, but would rather not hardcode
  var aactivateBtnMarginTop = (2 * $windowHeight / 5) - $activateBtnHeight;
  $activateBtn.css({'marginTop': aactivateBtnMarginTop}).fadeIn(300);

});
