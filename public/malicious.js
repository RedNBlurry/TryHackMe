document.addEventListener('DOMContentLoaded', function() {
    var completeLabButton = document.getElementById('completeLab');
    
    completeLabButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Display an alert
        alert('Congratulations! You have been SELECTED.');
        // Redirect to a new page
        window.location.href = 'https://geekprank.com/hacker/';
    });
});