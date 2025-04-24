document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu');
    const totalPriceElement = document.getElementById('total-price');
    const submitButton = document.getElementById('submit-btn');

    // Update total price whenever a menu item is selected or deselected
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('change', updateTotalPrice);
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        menuItems.forEach(menuItem => {
            if (menuItem.checked) {
                totalPrice += parseInt(menuItem.getAttribute('data-price'));
            }
        });
        totalPriceElement.textContent = `Rp${totalPrice.toLocaleString()}`;
    }

    // Handle form submission
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const paymentMethod = document.getElementById('payment-method').value;

        if (name && phone && paymentMethod) {
            alert(`Pembayaran berhasil!\nNama: ${name}\nTelepon: ${phone}\nMetode Pembayaran: ${paymentMethod}\nTotal: ${totalPriceElement.textContent}`);
        } else {
            alert('Harap lengkapi semua informasi.');
        }
    });
});
