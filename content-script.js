(function () {
  function notranslate (element) {
    element.className += " notranslate"
  }

  var __IGNORE_ELEMENTS = ["PRE", "CODE", "FONT", "A"];



  [].filter
    .call(document.all, (el) => __IGNORE_ELEMENTS.indexOf(el.tagName.toUpperCase()) > -1)
    .forEach(notranslate);

  var __IGNORE_CLASSNAME = ['highlight']

  __IGNORE_CLASSNAME.forEach(k => {
    Array.prototype.slice.apply(document.getElementsByClassName(k))
      .forEach(notranslate);
  })

})();
