// Sample prerequisites data
const prerequisites = [
    { code: "CS202", name: "Data Structures", prereq: "CS101" },
    { code: "CS303", name: "Database Systems", prereq: "CS202" },
    { code: "CS404", name: "Operating Systems", prereq: "CS202" },
    { code: "CS505", name: "Machine Learning", prereq: "CS303" },
    { code: "CS606", name: "Artificial Intelligence", prereq: "CS505" },
    { code: "CS101", name: "Introduction to Programming", prereq: "None" }
];

// Load prerequisites into the table
const prerequisitesTable = document.getElementById("prerequisites-table");
prerequisites.forEach(course => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td class="${course.prereq === "None" ? "no-prerequisites" : ""}">${course.prereq}</td>
    `;
    prerequisitesTable.appendChild(row);
});
