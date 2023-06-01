//localStorage
const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let lightMode = localStorage.getItem("light-mode");

const enablelightMode = () => {
  theme.classList.add("light-mode-theme");
  toggleBtn.classList.remove("toggle");
  localStorage.setItem("light-mode", "enabled");
};

const disablelightMode = () => {
  theme.classList.remove("light-mode-theme");
  toggleBtn.classList.add("toggle");
  localStorage.setItem("light-mode", "disabled");
};

if (lightMode === "enabled") {
  enablelightMode();
}

toggleBtn.addEventListener("click", (e) => {
  lightMode = localStorage.getItem("light-mode");
  if (lightMode === "disabled") {
    enablelightMode();
    disappearSun();
  } else {
    disablelightMode();
    appearSun();

  }
});

//trocar o ícone
const span = document.getElementById("change");
let ggSun = localStorage.getItem("gg-sun");

const appearSun = () => {
  span.classList.remove("gg-moon");
  span.classList.add("gg-sun");
  localStorage.setItem("gg-sun", "enabled");
}
const disappearSun = () => {
  span.classList.remove("gg-sun");
  span.classList.add("gg-moon");
  localStorage.setItem("gg-sun", "disabled")
}
if (lightMode === "enabled") {
  disappearSun();
}
