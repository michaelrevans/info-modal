$(document).ready(function() {

  var $modal = $('#category-modal'),
      $body = $('body'),
      $activateBtn = $('#all-categories'),
      $category = $('.category');
      $catDesc = $('#category-description');
      $catDescDiv = $catDesc.find('div');

  $('#all-categories').on('click', function() {
    positionModal();
    $activateBtn.fadeOut(400, function() {
      $modal.fadeIn(400).addClass('active');
      $body.addClass('modal-active');
    });
  });

  $('.close-modal>span').on('click', function() {
    positionBtn();
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
  var positionModal = function() {
    var $windowHeight = $(window).height(), // height of screen
        $windowWidth = $(window).width(),
        $catDescHeight = $modal.outerHeight(),
        modalTop = ($windowHeight - $catDescHeight) / 2;
    if ($windowWidth >= 650) {
      $modal.css({'top': modalTop});
    } else {
      $modal.css({'top': 0});
    };
  };

  var positionBtn = function() {
    var $windowHeight = $(window).height(), // height of screen
        $activateBtnHeight = $activateBtn.outerHeight(), // height of button, shouldn't change, but would rather not hardcode
        activateBtnMarginTop = (2 * $windowHeight / 5) - $activateBtnHeight;
    $activateBtn.css({'marginTop': activateBtnMarginTop}).fadeIn(300);
  }

  var positionElements = function() {
    if ($body.hasClass('modal-active')) {
      positionModal();
    } else {
      positionBtn();
    }
  };

  positionElements();

  $(window).resize(positionElements);

});
