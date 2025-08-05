function showSection(id) {
  const sections = document.querySelectorAll('.section-container');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Connect to Relay backend
async function sendDataToRelay(endpoint, data) {
  const url = "YOUR_RELAY_WEBHOOK_URL"; // Replace with actual Relay URL
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint, data })
  });
}

// Form listeners
document.getElementById('checkinForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = new FormData(this);
  const output = `
    <h3>Check-in Summary</h3>
    <p><strong>Mood:</strong> ${form.get("mood")}</p>
    <p><strong>Energy:</strong> ${form.get("energy")}/10</p>
    <p><strong>Sleep:</strong> ${form.get("sleep")} hours</p>
    <p><strong>Goals:</strong> ${form.get("goals")}</p>
  `;
  document.getElementById("checkinOutput").innerHTML = output;
});

// Meal planner form
document.getElementById('mealForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = new FormData(this);
  const output = `
    <h3>Meal Plan</h3>
    <p><strong>Diet:</strong> ${form.get("diet")}</p>
    <p><strong>Target Calories:</strong> ${form.get("calories")} kcal</p>
    <p>Suggested meals will appear here (connected to backend later).</p>
  `;
  document.getElementById("mealOutput").innerHTML = output;
});

// Habit tracker form
document.getElementById('habitForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = new FormData(this);
  const output = `
    <h3>Habit Tracking</h3>
    <p><strong>Water Intake:</strong> ${form.get("water")} glasses</p>
    <p><strong>Sleep Hours:</strong> ${form.get("sleepHours")} hrs</p>
    <p><strong>Screen Time:</strong> ${form.get("screen")} hrs</p>
    <p><strong>Steps Walked:</strong> ${form.get("steps")} steps</p>
  `;
  document.getElementById("habitOutput").innerHTML = output;
});



