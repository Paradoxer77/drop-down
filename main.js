const droppers = Array.from(document.getElementsByClassName("dropper"));
const dropContent = Array.from(document.getElementsByClassName("drop-content"));

for (let i = 0; i < dropContent.length; i++) {
  droppers[i].addEventListener("mouseover", () => {
    dropContent[i].style.maxHeight = "500px";
  });

  droppers[i].addEventListener("mouseleave", () => {
    dropContent[i].style.maxHeight = "0";
  });
}

for (let i = 0; i < dropContent.length; i++) {
  dropContent[i].addEventListener("mouseover", () => {
    dropContent[i].style.maxHeight = "500px";
  });

  dropContent[i].addEventListener("mouseleave", () => {
    dropContent[i].style.maxHeight = "0";
  });
}
