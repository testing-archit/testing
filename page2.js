function shiftHandover() {
    alert("Shift Handover clicked");
}

function safetyManagement() {
    alert("Safety Management clicked");
}

// Function to show the alert modal
function triggerAlert(message) {
    document.getElementById('alertMessage').innerText = message; // Set the alert message
    document.getElementById('alertModal').style.display = 'block'; // Show the modal
}

// Function to close the alert modal
function closeAlert() {
    document.getElementById('alertModal').style.display = 'none'; // Hide the modal
}

// Example: Triggering the alert (you can replace this with real-time data)
setTimeout(function() {
    triggerAlert('High gas levels detected in Section B!'); // Example alert message
}, 5000); // Trigger alert after 5 seconds (for testing purposes)
