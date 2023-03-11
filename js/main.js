function showLeftDropdown (dropdown, btn) {
    document.getElementsByClassName(dropdown)[0].classList.toggle("hidden");
    document
      .getElementsByClassName(btn)[0]
      .classList.toggle("left-drop-btn-active");
}
