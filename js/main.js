const btnAll = document.querySelectorAll(".left-dropdown");

  btnAll.forEach((btn) => {
    btn.addEventListener("click", () => {

      if (btn.classList.contains("activeDrop")) {
        btn.classList.remove("activeDrop");
      } else {
        btnAll.forEach((btn) => {
          btn.classList.remove("activeDrop");
        });
        btn.classList.toggle("activeDrop");
      }

    });
  });

  // Right Side Navigation dropdown

  function showDropMenu() {
    document.getElementById("nav-dropdown").classList.toggle("hidden");
  }

document.addEventListener("click", () => {
  const btn = document.getElementById("right-drop-btn");

  if (!btn.contains(event.target)) {
    document.getElementById("nav-dropdown").classList.add("hidden");
  }
});
