document.getElementById("add-student-btn").addEventListener("click", function () {
    let rollNumber = document.getElementById("roll-number").value;
    let studentName = document.getElementById("student-name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    // Basic validation
    if (!rollNumber || !studentName || !email) {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    // Roll number format validation
    let rollNumberPattern = /^22F-\d{4}$/;
    if (!rollNumberPattern.test(rollNumber)) {
        message.style.color = "red";
        message.textContent = "Invalid Roll Number format! Example: 22F-1234";
        return;
    }

    // Retrieve existing students from localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Check if roll number already exists
    if (students.some(student => student.roll === rollNumber)) {
        message.style.color = "red";
        message.textContent = "Roll Number already exists!";
        return;
    }

    // Add new student
    let newStudent = { roll: rollNumber, name: studentName, email: email };
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    // Success message
    message.style.color = "green";
    message.textContent = `Student ${studentName} added successfully!`;

    // Clear input fields
    document.getElementById("roll-number").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("email").value = "";

    // Redirect to Manage Students Page after 1 second
    setTimeout(() => {
        window.location.href = "/public/admin-manage-stud.html";
    }, 1000);
});
