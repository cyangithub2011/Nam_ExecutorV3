document.addEventListener('mousemove', (event) => {
    const card = document.querySelector('.card');
    const rect = card.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;

    card.style.setProperty('--mouse-x', mouseX);
    card.style.setProperty('--mouse-y', mouseY);
});