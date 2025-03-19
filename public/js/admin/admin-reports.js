const reportHeader = document.getElementById("report-header");
const reportBody = document.getElementById("report-body");

// Sample data for reports
let students = JSON.parse(localStorage.getItem("students")) || [
    { roll: "22F-1001", name: "Ali Khan", email: "ali@example.com", courses: ["CS101", "CS202"] },
    { roll: "22F-1002", name: "Sara Ahmed", email: "sara@example.com", courses: ["CS303"] },
    { roll: "22F-1003", name: "Bilal Raza", email: "bilal@example.com", courses: ["CS101"] }
];

let courses = JSON.parse(localStorage.getItem("courses")) || [
    { code: "CS101", name: "Introduction to Programming", credits: 3, seats: 5 },
    { code: "CS202", name: "Data Structures", credits: 4, seats: 0 },
    { code: "CS303", name: "Database Systems", credits: 3, seats: 10 }
];

let prerequisites = {
    "CS202": ["CS101"],
    "CS303": ["CS202"]
};

// Generate report for students registered in a course
function generateStudentReport() {
    reportHeader.innerHTML = "<th>Course Code</th><th>Student Roll</th><th>Student Name</th>";
    reportBody.innerHTML = "";

    students.forEach(student => {
        student.courses.forEach(course => {
            let row = `<tr><td>${course}</td><td>${student.roll}</td><td>${student.name}</td></tr>`;
            reportBody.innerHTML += row;
        });
    });
}

// Generate report for courses with available seats
function generateAvailableSeatsReport() {
    reportHeader.innerHTML = "<th>Course Code</th><th>Course Name</th><th>Available Seats</th>";
    reportBody.innerHTML = "";

    courses.filter(course => course.seats > 0).forEach(course => {
        let row = `<tr><td>${course.code}</td><td>${course.name}</td><td>${course.seats}</td></tr>`;
        reportBody.innerHTML += row;
    });
}

// Generate report for students missing prerequisites
function generatePrerequisiteReport() {
    reportHeader.innerHTML = "<th>Student Roll</th><th>Student Name</th><th>Missing Prerequisites</th>";
    reportBody.innerHTML = "";

    students.forEach(student => {
        student.courses.forEach(course => {
            if (prerequisites[course]) {
                let missingPrereqs = prerequisites[course].filter(prereq => !student.courses.includes(prereq));
                if (missingPrereqs.length > 0) {
                    let row = `<tr><td>${student.roll}</td><td>${student.name}</td><td>${missingPrereqs.join(", ")}</td></tr>`;
                    reportBody.innerHTML += row;
                }
            }
        });
    });
}
