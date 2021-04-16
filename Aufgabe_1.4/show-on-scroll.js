/* OnAppear left */

var onAppear = [];

document.addEventListener("DOMContentLoaded", function () {
  onAppear = [].map.call(document.querySelectorAll(".onAppearleft"), function (item) {
    return item;
  });
}, false);

window.addEventListener("scroll", function () {
  onAppear.forEach(function (elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;

    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
      elem.classList.add("visible");
    } else {
      elem.classList.remove("visible");
    }
  });
}, false);

