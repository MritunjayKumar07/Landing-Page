const header = document.getElementsByTagName("header")[0];
header.innerHTML = `
        <div id="logo">
          <img src="./asserts/logo/codecomponents.png" alt="Logo" />
        </div>
        <nav id="nave-header">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <!-- Menu control -->
        <div id="menu">
          <img
            id="menuBtn"
            src="./asserts/menuicon/0.png"
            alt="menu-btn"
            height="30px"
            style="margin-top: 1.5vh"
            onclick="menuClick()"
          />
        </div>
`;


const menu = document.getElementById("menuBtn");
const navget = document.getElementById("nave-header");

function menuClick() {
  const currentSrc = menu.getAttribute("src");

  const newSrc = currentSrc.includes("0.png")
    ? "./asserts/menuicon/1.png"
    : "./asserts/menuicon/0.png";

  // Toggle navigation display based on newSrc
  navget.style.display = newSrc.includes("0.png") ? "none" : "flex";
  menu.setAttribute("src", newSrc);
}
