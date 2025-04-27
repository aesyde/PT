// Function to open a new page with the booking details passed as parameters
function openEditPage(name, date, time, guests, status) {
    const url = `Editbooking.html?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&guests=${encodeURIComponent(guests)}&status=${encodeURIComponent(status)}`;
    window.location.href = url; // Navigate to the new page
  }
  
  // Function to handle updating status on page load
  window.onload = function() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // If there is a status update (e.g., after the edit booking page), update the booking entry
    const updatedStatus = urlParams.get('status');
    
    // If status is updated in the URL, update the status in the booking entries
    if (updatedStatus) {
      // Adjust the status for Herman's reservation
      if (urlParams.get('name') === 'herman') {
        updateStatus('herman', updatedStatus);
      }
      
      // Adjust the status for Mega's reservation
      if (urlParams.get('name') === 'mega') {
        updateStatus('mega', updatedStatus);
      }
    }
  };
  
  // Function to update the status in the booking entry
  function updateStatus(name, status) {
    const statusText = status === 'approved' ? 'Disetujui' : 'Tidak Disetujui';
    const statusClass = status === 'approved' ? 'approved' : 'rejected';
    
    // Update the status in the DOM
    document.getElementById(`${name}Status`).textContent = statusText;
    document.getElementById(`${name}Status`).className = `status ${statusClass}`;
  }
  
  // Function to go to the home or dashboard page
  function goToHome() {
    window.location.href = 'Berandaadmin.html'; // Change this URL if necessary (e.g., 'home.html' or your actual home page URL)
  }
  