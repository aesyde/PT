// Increase/Decrease Quantity Function
document.querySelectorAll('.increase').forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityElement = document.querySelector(`#quantity${index + 1}`);
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    });
});

document.querySelectorAll('.decrease').forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityElement = document.querySelector(`#quantity${index + 1}`);
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    });
});

// Back Button functionality (Navigate back to the previous page)
document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});
