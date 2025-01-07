const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;
let xRotation = 45;
let yRotation = 45;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - previousX;
  const deltaY = e.clientY - previousY;

  xRotation -= deltaY * 0.2;
  yRotation += deltaX * 0.2;

  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
