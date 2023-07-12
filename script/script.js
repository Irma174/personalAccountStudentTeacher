document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {
    opacity: 0.2,
    inDuration: 400,
    outDuration: 400,
    preventScrolling: false,
  });
});
