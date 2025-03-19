const courseTable = document.getElementById("course-table");

// Sample course data (replace with database fetch later)
const courses = JSON.parse(localStorage.getItem("courses")) || [
    { code: "CS101", name: "Introduction to Programming", credits: 3 },
    { code: "CS202", name: "Data Structures", credits: 4 },
    { code: "CS303", name: "Database Systems", credits: 3 }
];

// Load courses into the table
function loadCourses() {
    courseTable.innerHTML = ""; // Clear previous data
    courses.forEach((course, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.credits}</td>
            <td>
                <button class="action-btn" onclick="removeCourse(${index})">Remove</button>
            </td>
        `;
        courseTable.appendChild(row);
    });
}

// Remove a course
function removeCourse(index) {
    courses.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    loadCourses();
}

// Load courses when page loads
window.onload = loadCourses;
