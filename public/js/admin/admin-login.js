document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    // Hardcoded admin credentials for now
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username !== validUsername || password !== validPassword) {
        errorMsg.textContent = "Invalid Username or Password!";
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        alert("Login successful! Redirecting...");
        window.location.href = "admin-dashboard.html"; // Redirect after successful login
    }
});
