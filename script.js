let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const jakartaTime = now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
const [date, time] = jakartaTime.split(", ");
timeText.textContent = `${time} GMT-5`

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;