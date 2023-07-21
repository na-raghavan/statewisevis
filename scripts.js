// Get references to the buttons and the image element
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const image = document.getElementById("image");

// Add click event listeners to the buttons
button1.addEventListener("click", () => displayImage("image1.jpg"));
button2.addEventListener("click", () => displayImage("image2.jpg"));
button3.addEventListener("click", () => displayImage("image3.jpg"));

// Function to display the selected image
function displayImage(imagePath) {
  // Set the image source to the selected image
  image.src = imagePath;

  // Show the image
  image.style.display = "block";
}
