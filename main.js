let openBtn = document.querySelector(".openBtn");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close");
let accepBtn = document.querySelector(".acceptBtn");
function openModal() {
  console.log("Modal Opened!");
  overlay.classList.add("showOverlay");
  modal.classList.replace("modal", "showModal");
  //modal__container
  //showModal__container
}
function removeOverlay() {
  overlay.classList.remove("showOverlay");
  modal.classList.replace("showModal", "modal");
}
openBtn.addEventListener("click", openModal);
overlay.addEventListener("click", removeOverlay);
closeBtn.addEventListener("click", removeOverlay);
accepBtn.addEventListener("click", removeOverlay);
