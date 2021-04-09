// js-detect-blocked
(function () {
  var image = new Image();
  var ta = $('.js-detect-blocked');
  image.onload = function () {
    // The user can access youtube
    ta.show();
  };
  image.onerror = function () {
    // The user can't access youtube
    ta.hide();
  };
  image.src = "https://youtube.com/favicon.ico";
})();