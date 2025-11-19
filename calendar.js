const calendar = document.getElementById("calendar");
let selectedDay = null;

// Create the days of the current month
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const totalDays = new Date(year, month + 1, 0).getDate();

// Add weekday labels
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
weekdays.forEach(day => {
  let label = document.createElement("div");
  label.textContent = day;
  label.style.fontWeight = "bold";
  calendar.appendChild(label);
});

// Generate days
for (let day = 1; day <= totalDays; day++) {
  let dayEl = document.createElement("div");
  dayEl.classList.add("day");
  dayEl.textContent = day;

  dayEl.addEventListener("click", () => {
    if (selectedDay) selectedDay.classList.remove("selected");
    dayEl.classList.add("selected");
    selectedDay = dayEl;

    const selectedDate = `${year}-${month + 1}-${day}`;
    console.log("Selected:", selectedDate);

    // Example: store locally
    localStorage.setItem("selectedDate", selectedDate);
  });

  calendar.appendChild(dayEl);
}
