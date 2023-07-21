const checkbox = document.getElementById("checkbox");
const iframeContainer = document.getElementById("iframeContainer");
const iframe1 = document.getElementById("iframe1");
const iframe2 = document.getElementById("iframe2");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    iframe1.style.display = "block";
    iframe2.style.display = "none";
  } else {
    iframe1.style.display = "none";
    iframe2.style.display = "block";
  }
});
