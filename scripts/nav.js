const navbar = document.querySelector(".nav__bar")
let mouseDown = false
let startX, scrollLeft

/**
 * Calculates dragging distance
 * @param {object} e is event 
 */
let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - navbar.offsetLeft;
  scrollLeft = navbar.scrollLeft;
}

/**
 * Sets mousedown to false aka
 */
let stopDragging = function () {
  mouseDown = false;
}

navbar.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - navbar.offsetLeft;
  const scroll = x - startX;
  navbar.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
navbar.addEventListener('mousedown', startDragging, false);
navbar.addEventListener('mouseup', stopDragging, false);
navbar.addEventListener('mouseleave', stopDragging, false);