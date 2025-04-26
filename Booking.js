document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const submitButton = document.querySelector('.book-button');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        if (name === '' || date === '' || time === '' || guests === '') {
            alert('Please fill in all the fields.');
            return;
        }

        // Store booking data in localStorage
        let bookingHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
        bookingHistory.push({ name, date, time, guests });
        localStorage.setItem('bookingHistory', JSON.stringify(bookingHistory));

        // Redirect to the history page
        window.location.href = 'history.html';
    });

    submitButton.addEventListener('click', function () {
        submitButton.disabled = true; // Disable the button to prevent multiple clicks
        submitButton.textContent = 'Booking...'; // Change button text
    });
});
