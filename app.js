const openNav = ()=>{
  document.querySelector(".mobile-contact").style.display = "block";
  document.querySelector(".bg-drop").classList.add("overlay");
  document.querySelector(".close").classList.add("style");
  document.querySelector(".open").classList.add("disapper");
}

const closeNav = ()=>{
  document.querySelector(".mobile-contact").style.display = "none";
  document.querySelector(".bg-drop").classList.remove("overlay");
  document.querySelector(".close").classList.remove("style");
  document.querySelector(".open").classList.remove("disapper");
}

document.querySelector(".open").addEventListener("click", openNav);
document.querySelector(".close").addEventListener("click", closeNav);
