// Simulated course data
const courses = [
    { code: "CS101", name: "Introduction to Programming", credits: 3, instructor: "Dr. Smith" },
    { code: "CS202", name: "Data Structures", credits: 4, instructor: "Dr. Lee" },
    { code: "CS303", name: "Database Systems", credits: 3, instructor: "Dr. Johnson" },
    { code: "CS404", name: "Operating Systems", credits: 3, instructor: "Dr. Williams" }
];

// Dynamically load course data into the table
const courseTable = document.getElementById("course-table");
courses.forEach(course => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td>${course.credits}</td>
        <td>${course.instructor}</td>
    `;
    courseTable.appendChild(row);
});

// Logout functionality
document.getElementById("logout-btn").addEventListener("click", function () {
    alert("Logging out...");
    window.location.href = "student-login.html";
});
