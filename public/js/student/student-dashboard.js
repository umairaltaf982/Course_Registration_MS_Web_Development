// Simulated student data (this can later be fetched from a database)
const studentData = {
    name: "John Doe",
    roll: "22F-XXXX",
    enrolledCourses: 4,
    totalCredits: 12,
    availableCourses: 5
};

// Display student info dynamically
document.getElementById("student-name").textContent = studentData.name;
document.getElementById("student-roll").textContent = studentData.roll;
document.getElementById("dashboard-name").textContent = studentData.name;
document.getElementById("total-courses").textContent = studentData.enrolledCourses;
document.getElementById("total-credits").textContent = studentData.totalCredits;
document.getElementById("available-courses").textContent = studentData.availableCourses;

// Logout functionality
document.querySelector(".sidebar ul li:last-child").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "student-login.html";
});
