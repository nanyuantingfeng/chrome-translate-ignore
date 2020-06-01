(function () {
  var __IGNORE_LIST = ["PRE", "CODE"];

  [].filter
    .call(document.all, function (el) {
      return __IGNORE_LIST.indexOf(el.tagName.toUpperCase()) > -1;
    })
    .forEach((el) => (el.className += " notranslate"));
})();
