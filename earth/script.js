var cube = document.getElementById('cube');
var isDragging = false;
var previousX, previousY;

cube.addEventListener('mousedown', function(e) {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) return;

  var deltaX = e.clientX - previousX;
  var deltaY = e.clientY - previousY;

  cube.style.transform = 'rotateX(' + (deltaY + 45) + 'deg) rotateY(' + (deltaX + 45) + 'deg)';

  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});
