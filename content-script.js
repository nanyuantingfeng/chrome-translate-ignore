(function () {
  function notranslate (element) {
    element.className += " notranslate"
  }

  function toarray (arraylike) {
    return Array.prototype.slice.apply(arraylike)
  }


  var __IGNORE_ELEMENTS = ["PRE", "CODE", "FONT", "A"];


  toarray(document.all)
    .filter((el) => __IGNORE_ELEMENTS.indexOf(el.tagName.toUpperCase()) > -1)
    .forEach(notranslate);

  var __IGNORE_CLASSNAME = ['highlight']

  __IGNORE_CLASSNAME.forEach(k => toarray(document.getElementsByClassName(k).forEach(notranslate)))

})();
