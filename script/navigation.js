let navBar = document.querySelector(".nav-list");
let menuToggle = document.querySelector(".bi-list");
let hide = document.querySelector(".close");

function handleOutsideClick(event) {
  if (navBar.classList.contains("open") && !navBar.contains(event.target)) {
    navBar.classList.remove("open");
    document.body.removeEventListener("click", handleOutsideClick);
  }
}
menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    document.body.addEventListener("click", handleOutsideClick);
  } else {
    document.body.removeEventListener("click", handleOutsideClick);
  }
});
hide.addEventListener("click", (event) => {
  event.stopPropagation();
  navBar.classList.remove("open");
  document.body.removeEventListener("click", handleOutsideClick);
});
