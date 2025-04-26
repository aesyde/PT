document.addEventListener('DOMContentLoaded', function () {
    const historyContainer = document.getElementById('historyContainer');

    // Fetch booking history from localStorage
    const bookingHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];

    if (bookingHistory.length === 0) {
        historyContainer.innerHTML = '<h3>No bookings yet.</h3>';
    } else {
        let historyHTML = '<ul>';
        bookingHistory.forEach((booking, index) => {
            historyHTML += `
                <li>
                    <strong>Booking #${index + 1}</strong><br>
                    <label>Name: </label><input type="text" value="${booking.name}" readonly><br>
                    <label>Date: </label><input type="date" value="${booking.date}" readonly><br>
                    <label>Time: </label><input type="time" value="${booking.time}" readonly><br>
                    <label>Guests: </label><input type="number" value="${booking.guests}" readonly><br><br>
                </li>
            `;
        });
        historyHTML += '</ul>';
        historyContainer.innerHTML = historyHTML;
    }
});
