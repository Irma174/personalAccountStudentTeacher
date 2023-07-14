document.addEventListener("DOMContentLoaded", function () {
  var popup = document.querySelectorAll(".modal");
  var instances = M.Modal.init(popup, {
    opacity: 0.2,
    inDuration: 400,
    outDuration: 400,
    preventScrolling: false,
  });

});
