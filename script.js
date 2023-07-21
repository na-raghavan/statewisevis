const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const iframe = document.getElementById("iframe");

// Add click event listeners to the buttons
button1.addEventListener("click", () => embedContent("https://na-raghavan.github.io/datavisproject1/"));
button2.addEventListener("click", () => embedContent("https://na-raghavan.github.io/datavisproject1/"));
button3.addEventListener("click", () => embedContent("https://na-raghavan.github.io/datavisproject1/"));

// Function to embed the selected content using the iframe
function embedContent(url) {
  // Set the iframe source to the selected URL
  iframe.src = url;
}
