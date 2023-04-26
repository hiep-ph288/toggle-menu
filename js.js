const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", handleToggleMenu);

function handleToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}

document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  //selector.contains: kiểm tra element có chứa element khác không:
  // để khi mình click ở bên ngoài thì menu sẽ đóng còn click bên trong menu thì sẽ không đón
  //event.target.matches('selector'): trỏ tới khớp với selector
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");

  }
}
