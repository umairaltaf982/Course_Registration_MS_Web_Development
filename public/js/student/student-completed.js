// Sample completed courses data
const completedCourses = [
    { code: "CS101", name: "Introduction to Programming", credits: 3, grade: "A", status: "Passed" },
    { code: "CS202", name: "Data Structures", credits: 4, grade: "B+", status: "Passed" },
    { code: "CS303", name: "Database Systems", credits: 3, grade: "A-", status: "Passed" },
    { code: "CS404", name: "Operating Systems", credits: 3, grade: "C", status: "Passed" },
    { code: "CS505", name: "Machine Learning", credits: 4, grade: "F", status: "Failed" }
];

// Load completed courses into the table
const completedTable = document.getElementById("completed-table");
completedCourses.forEach(course => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td>${course.credits}</td>
        <td>${course.grade}</td>
        <td class="${course.status === "Passed" ? "status-pass" : "status-fail"}">${course.status}</td>
    `;
    completedTable.appendChild(row);
});
