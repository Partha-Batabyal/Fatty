let main = document.querySelector("#main");
let loader = document.querySelector(".main_body_loader");
main.style.display = "none";

window.addEventListener("load", () => {
  // song(); // call the function to play the song

  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 4000);
  // if(loader.style.display!="none"){

  //   song();
  // }
});
