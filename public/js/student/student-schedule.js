// Sample schedule data (this can later be fetched from a database)
const scheduleData = [
    { time: "08:00 - 09:30", monday: "CS101", tuesday: "CS202", wednesday: "CS101", thursday: "CS202", friday: "" },
    { time: "10:00 - 11:30", monday: "CS303", tuesday: "", wednesday: "CS303", thursday: "", friday: "CS404" },
    { time: "12:00 - 01:30", monday: "", tuesday: "CS404", wednesday: "", thursday: "CS101", friday: "CS202" }
];

// Load schedule into table
const scheduleBody = document.getElementById("schedule-body");
scheduleData.forEach(entry => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${entry.time}</td>
        <td>${entry.monday || "-"}</td>
        <td>${entry.tuesday || "-"}</td>
        <td>${entry.wednesday || "-"}</td>
        <td>${entry.thursday || "-"}</td>
        <td>${entry.friday || "-"}</td>
    `;
    scheduleBody.appendChild(row);
});
