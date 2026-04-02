const inputs = document.querySelectorAll("input");

function getTodayEndTime() {
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    22, // 10 PM
    0,
    0,
  );
}

// Format date like: 2 April 2026, 10:00 PM
function formatDate(date) {
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function clock() {
  const end = getTodayEndTime();
  const now = new Date();

  // 🔥 Update UI date
  document.getElementById("end-date").innerText = formatDate(end);

  const diff = (end - now) / 1000;

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

setInterval(clock, 1000);
