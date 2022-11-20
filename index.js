// Grabbing our icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
};

// Initial theme check on page load
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
};

// Manually switch Theme fn
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Add event listeners:::Call themeswitch fn on clicking icons
moonIcon.addEventListener("click", () => {
  themeSwitch();
});

sunIcon.addEventListener("click", () => {
  themeSwitch();
});
// Group the icons with queryselectorAll and the use forEach() loop instead of the two seperate functions

// invoke theme check on load
themeCheck();
