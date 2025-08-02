function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
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
  const data = Object.fromEntries(new FormData(this));
  await sendDataToRelay('checkin', data);
  alert("Check-In submitted!");
});

document.getElementById('mealForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  await sendDataToRelay('mealPlanner', data);
  document.getElementById('mealOutput').innerText = "Meal plan requested!";
});

document.getElementById('habitForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  await sendDataToRelay('habitTracker', data);
  alert("Habits updated!");
});
