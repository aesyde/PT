// Function to populate the form with the data passed from the previous page
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const name = urlParams.get('name');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const guests = urlParams.get('guests');
    const status = urlParams.get('status');
    
    // Populate the form fields with the values from the URL
    document.getElementById('name').value = name;
    document.getElementById('date').value = date;
    document.getElementById('time').value = time;
    document.getElementById('guests').value = guests;
    document.getElementById('status').value = status;
  
    // Function to update the status indicator
    updateStatusIndicator(status);
  
    // Handle form submission
    document.getElementById('editForm').onsubmit = function(event) {
      event.preventDefault();
      
      // Get updated values from the form
      const updatedName = document.getElementById('name').value;
      const updatedDate = document.getElementById('date').value;
      const updatedTime = document.getElementById('time').value;
      const updatedGuests = document.getElementById('guests').value;
      const updatedStatus = document.getElementById('status').value;
      
      // You can handle saving the updated data here (e.g., send it to the server)
      console.log(`Updated Booking: ${updatedName}, ${updatedDate}, ${updatedTime}, Guests: ${updatedGuests}, Status: ${updatedStatus}`);
      
      alert('Booking updated successfully!');
      
      // Redirect back to booking page after saving
      window.location.href = 'Booking.html'; // Adjust this path if necessary
    };
  
    // Listen for status change and update the indicator
    document.getElementById('status').addEventListener('change', function() {
      const status = this.value;
      updateStatusIndicator(status);
    });
  };
  
  // Function to update status indicator
  function updateStatusIndicator(status) {
    const statusIndicator = document.getElementById('statusIndicator');
    if (status === 'approved') {
      statusIndicator.textContent = "Status: Disetujui";
      statusIndicator.className = 'status-indicator status-approved';
    } else if (status === 'rejected') {
      statusIndicator.textContent = "Status: Tidak Disetujui";
      statusIndicator.className = 'status-indicator status-rejected';
    }
  }
  
  // Function to go back to the booking page without submitting
  function goBack() {
    window.location.href = 'Booking.html'; // Change this URL if necessary
  }
  