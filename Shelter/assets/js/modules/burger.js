function burger() {
  const burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav");

  function close() {
    burger.classList.toggle("rotate");
    burger.classList.contains("rotate")
      ? (nav.style.right = "0")
      : (nav.style.right = "-700px");
  }
  burger.addEventListener("click", close);
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "NAV") {
      close();
    }
  });
}

export default burger;
