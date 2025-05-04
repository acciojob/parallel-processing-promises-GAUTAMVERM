//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const output = document.getElementById("output");
const errorDiv = document.getElementById("error");
const loadingDiv = document.getElementById("loading");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image at ${url}`);
  });
}

function downloadImages() {
  // Clear previous content
  output.innerHTML = "";
  errorDiv.textContent = "";
  loadingDiv.style.display = "block";

  const downloadPromises = images.map(img => downloadImage(img.url));

  Promise.all(downloadPromises)
    .then(loadedImages => {
      loadedImages.forEach(img => output.appendChild(img));
    })
    .catch(err => {
      errorDiv.textContent = err;
    })
    .finally(() => {
      loadingDiv.style.display = "none";
    });
}

// Trigger on button click
btn.addEventListener("click", downloadImages);

