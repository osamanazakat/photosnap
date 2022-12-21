// Navbar

const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  navbar.classList.add("open");
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});

// Plan switch button

const dot = document.getElementById("dot");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const switcher = document.getElementById("switcher");
const monthlyPlan = document.querySelectorAll("#monthly-plan");
const yearlyPlan = document.querySelectorAll("#yearly-plan");

switcher.addEventListener("click", () => {
  yearly.classList.toggle("color");
  monthly.classList.toggle("color");
  dot.classList.toggle("dot");
  switcher.classList.toggle("switch");
  for (let i = 0; i < monthlyPlan.length; i++) {
    monthlyPlan[i].classList.toggle("display-none");
  }
  for (let i = 0; i < yearlyPlan.length; i++) {
    yearlyPlan[i].classList.toggle("display-html");
  }
});
