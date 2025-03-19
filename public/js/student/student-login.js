document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let rollNumber = document.getElementById("roll-number").value;
    let errorMsg = document.getElementById("error-msg");

    // Roll number format validation (Example: 22F-1234)
    let rollNumberPattern = /^22F-\d{4}$/;

    if (!rollNumberPattern.test(rollNumber)) {
        errorMsg.textContent = "Invalid Roll Number! Format: 22F-XXXX";
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        alert("Login successful! Redirecting...");
        window.location.href = "student-dashboard.html"; // Redirect after successful login
    }
});
