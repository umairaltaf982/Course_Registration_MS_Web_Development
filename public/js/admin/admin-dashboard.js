// Simulated admin data (replace with database fetch later)
const adminData = {
    name: "Admin",
    totalStudents: 120,
    totalCourses: 15,
    availableSeats: 250
};

// Display admin info dynamically
document.getElementById("admin-name").textContent = adminData.name;
document.getElementById("total-students").textContent = adminData.totalStudents;
document.getElementById("total-courses").textContent = adminData.totalCourses;
document.getElementById("available-seats").textContent = adminData.availableSeats;
