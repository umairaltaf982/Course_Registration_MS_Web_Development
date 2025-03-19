const studentTable = document.getElementById("student-table");

// Load students from localStorage
function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    studentTable.innerHTML = ""; // Clear previous data

    students.forEach((student, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>
                <button class="action-btn" onclick="removeStudent(${index})">Remove</button>
            </td>
        `;
        studentTable.appendChild(row);
    });
}

// Remove a student
function removeStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

// Load students when page loads
window.onload = loadStudents;
