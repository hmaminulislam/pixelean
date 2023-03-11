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

// Left Sidebar Menu show

const element = document.getElementsByClassName("main-left-side")[0];
const icon = document.getElementById("mobile-sidebar-icon");

function showLeftBar() {
  element.classList.toggle("block");
  icon.classList.toggle("rotate-icon");
}

// Left Sidebar Menu close
function closeLeftbar() {
  element.classList.remove("block");
  icon.classList.remove("rotate-icon");
}
