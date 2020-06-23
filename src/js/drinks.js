openNav = () => {
  document
    .getElementById("mobile-navbar")
    .classList.replace("navbar-closed", "navbar-open");
  document.getElementById("hamburger-link").style.width = "0";
  document.getElementById("hamburger-link").style.opacity = "0";
  document.getElementById("hamburger-link").style.height = "0";
};

closeNav = () => {
  document
    .getElementById("mobile-navbar")
    .classList.replace("navbar-open", "navbar-closed");
  document.getElementById("hamburger-link").style.width = "10vh";
  document.getElementById("hamburger-link").style.opacity = "1";
  document.getElementById("hamburger-link").style.height = "5vh";
};
