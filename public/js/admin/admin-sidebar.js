document.addEventListener("DOMContentLoaded", function () {
    fetch("/public/admin-sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;

            // Add logout functionality
            document.getElementById("logout-btn").addEventListener("click", function () {
                alert("Logging out...");
                window.location.href = "admin-login.html";
            });
        });
});
