import "./public/style.css";

const ELE = document.documentElement;
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-nav li");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);

const options = [backDrop, menuBar, ...mobileNavItem];

options.forEach((item) =>
  item.addEventListener("click", () => {
    mobileNav.classList.toggle("h-0");
    mobileNav.classList.toggle("h-96");
    menuBarIcon.classList.toggle("fa-xmark");
    menuBarIcon.classList.toggle("fa-bars");
    backDrop.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  })
);

ELE.classList.add(localStorage.getItem("theme"));

document.addEventListener("DOMContentLoaded", function () {
  const btns1 = document.querySelector(".bts1");
  const btns2 = document.querySelector(".bts2");
  const withFramework = document.querySelectorAll(".with");
  const withoutFramework = document.querySelectorAll(".without");

  function showWithFramework() {
    withFramework.forEach((el) => el.classList.remove("hidden"));
    withoutFramework.forEach((el) => el.classList.add("hidden"));
    btns1.classList.add("active");
    btns2.classList.remove("active");
  }

  function showWithoutFramework() {
    withFramework.forEach((el) => el.classList.add("hidden"));
    withoutFramework.forEach((el) => el.classList.remove("hidden"));
    btns1.classList.remove("active");
    btns2.classList.add("active");
  }

  btns1.addEventListener("click", showWithFramework);
  btns2.addEventListener("click", showWithoutFramework);

  // Initially show w/ framework projects
  showWithFramework();
});
