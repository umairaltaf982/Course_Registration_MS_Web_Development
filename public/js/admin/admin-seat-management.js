const seatTable = document.getElementById("seat-table");

// Sample seat data (replace with database fetch later)
let seats = JSON.parse(localStorage.getItem("seats")) || [
    { code: "CS101", name: "Introduction to Programming", availableSeats: 30 },
    { code: "CS202", name: "Data Structures", availableSeats: 25 },
    { code: "CS303", name: "Database Systems", availableSeats: 20 }
];

// Load seats into the table
function loadSeats() {
    seatTable.innerHTML = ""; // Clear previous data
    seats.forEach((course, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>
                <input type="number" class="input-seats" value="${course.availableSeats}" min="0" id="seats-${index}">
            </td>
            <td>
                <button onclick="updateSeats(${index})">Update</button>
            </td>
        `;
        seatTable.appendChild(row);
    });
}

// Update seat count
function updateSeats(index) {
    let newSeats = document.getElementById(`seats-${index}`).value;
    if (newSeats < 0) {
        alert("Seats cannot be negative!");
        return;
    }

    seats[index].availableSeats = parseInt(newSeats);
    localStorage.setItem("seats", JSON.stringify(seats));
    alert("Seats updated successfully!");
}

// Load seats when page loads
window.onload = loadSeats;
