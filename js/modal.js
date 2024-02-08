document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.querySelector(".open");
  const btnClose = document.querySelector(".modal_x");
  const modal = document.querySelector(".modal");



  btnOpen.addEventListener("click", function (e) {
    e.preventDefault()

    modal.classList.add("open");

    document.body.style.overflow = "hidden";
  });


  btnClose.addEventListener("click", function (e) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
    e.stopPropagation();
  });
});


