// Drag functionality for categories
let isDragging = false;
let startX, scrollLeft;

const categories = document.querySelector('.categories');
const menuGrid = document.querySelector('.menu-grid');

categories.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - categories.offsetLeft;
    scrollLeft = categories.scrollLeft;
    categories.style.cursor = 'grabbing';
});

categories.addEventListener('mouseleave', () => {
    isDragging = false;
    categories.style.cursor = 'grab';
});

categories.addEventListener('mouseup', () => {
    isDragging = false;
    categories.style.cursor = 'grab';
});

categories.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - categories.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster
    categories.scrollLeft = scrollLeft - walk;
});

// Drag functionality for menu-grid
menuGrid.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - menuGrid.offsetLeft;
    scrollLeft = menuGrid.scrollLeft;
    menuGrid.style.cursor = 'grabbing';
});

menuGrid.addEventListener('mouseleave', () => {
    isDragging = false;
    menuGrid.style.cursor = 'grab';
});

menuGrid.addEventListener('mouseup', () => {
    isDragging = false;
    menuGrid.style.cursor = 'grab';
});

menuGrid.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - menuGrid.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster
    menuGrid.scrollLeft = scrollLeft - walk;
});
