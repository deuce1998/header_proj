let hTel = document.querySelectorAll(".h-tel-group > .h-tel"),
    hTelButton = document.getElementById("select-tel-btn");

hTelButton.addEventListener("click", () =>{
    for (const iterator of hTel) {
        iterator.classList.toggle("active")
    }
})



const hSearchBlock = document.getElementById("serch-bar"),
      headerLoop = document.getElementById("header-loop"),
      hSearchBlockBtn = document.querySelector("#h-search-block button.close_serch"),
      overlayRed = document.querySelector("#overlay-red");
headerLoop.addEventListener("click", () =>{
    hSearchBlock.classList.add("active");
    overlayRed.classList.add("active");
})
hSearchBlockBtn.addEventListener("click", () =>{
    hSearchBlock.classList.remove("active");
    overlayRed.classList.remove("active");
})
overlayRed.addEventListener("click", () =>{
    hSearchBlock.classList.remove("active");
    overlayRed.classList.remove("active");
})