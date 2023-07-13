document.addEventListener("DOMContentLoaded", function () {
  var popup = document.querySelectorAll(".modal");
  var instances = M.Modal.init(popup, {
    opacity: 0.2,
    inDuration: 400,
    outDuration: 400,
    preventScrolling: false,
  });

  var elems = document.querySelectorAll('.carousel');
  var inst = M.Carousel.init(elems,{
    duration: 300,
    dist: 0,
    shift: 20,
    numVisible: 1,
    fullWidht: true
  });
});

