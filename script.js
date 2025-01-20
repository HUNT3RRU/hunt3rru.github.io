let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

function updateTime() {
  const now = new Date();
  const ontarioTime = now.toLocaleString("en-US", { timeZone: "America/Toronto" });
  const [date, time] = ontarioTime.split(", ");
  timeText.textContent = `${time} GMT-5`;
}

// Initial call to set the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;
