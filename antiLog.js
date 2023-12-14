<script>
    // Check if the user is logged in
    function checkLogin() {
        var isLoggedIn = sessionStorage.getItem('isLoggedIn');

        // If not logged in, redirect to the login page
        if (!isLoggedIn || isLoggedIn !== 'true') {
            alert('Access denied. Please log in.');
            window.location.href = 'login.html';
        }
    }

    // Run the check when the page loads
    checkLogin();
</script>
