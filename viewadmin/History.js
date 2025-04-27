document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Action triggered!");
    });
});

document.querySelector('.cart-btn').addEventListener('click', function() {
    window.location.href = "cart.html"; // Just a placeholder for navigation.
});

document.querySelector('.home-btn').addEventListener('click', function() {
    window.location.href = "Beranda.html"; // Just a placeholder for navigation.
});

document.querySelector('.calendar-btn').addEventListener('click', function() {
    window.location.href = "History.html"; // Just a placeholder for navigation.
});