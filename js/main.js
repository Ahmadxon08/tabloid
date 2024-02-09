const index = document.querySelector(".index");

const show = document.querySelector(".show img");

index = addEventListener("click", (event) =>{
  let imgUrl = event.target.src;
  imgUrl && (show.src = imgUrl);
});
