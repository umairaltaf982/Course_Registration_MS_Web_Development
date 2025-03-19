document.getElementById("add-course-btn").addEventListener("click", function () {
    let courseCode = document.getElementById("course-code").value;
    let courseName = document.getElementById("course-name").value;
    let creditHours = document.getElementById("credit-hours").value;
    let message = document.getElementById("message");

    // Basic validation
    if (!courseCode || !courseName || !creditHours) {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    // Retrieve existing courses from localStorage
    let courses = JSON.parse(localStorage.getItem("courses")) || [];

    // Check if course code already exists
    if (courses.some(course => course.code === courseCode)) {
        message.style.color = "red";
        message.textContent = "Course Code already exists!";
        return;
    }

    // Add new course
    let newCourse = { code: courseCode, name: courseName, credits: creditHours };
    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));

    // Success message
    message.style.color = "green";
    message.textContent = `Course ${courseName} added successfully!`;

    // Clear input fields
    document.getElementById("course-code").value = "";
    document.getElementById("course-name").value = "";
    document.getElementById("credit-hours").value = "";

    // Redirect to Manage Courses Page after 1 second
    setTimeout(() => {
        window.location.href = "/public/admin-manage-courses.html";
    }, 1000);
});
