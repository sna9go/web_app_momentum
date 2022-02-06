const images = [
    "ash-hayes-X9qB9UUgssQ-unsplash.jpg",
    "corey-serravite-2oHumW47sKQ-unsplash.jpg",
    "dave-hoefler-Gpup3_nM6CY-unsplash.jpg",
    "johannes-plenio-UewgGfZgYj0-unsplash.jpg"
];

const imageOffset = Math.floor(Math.random() * images.length);

const chosenImage = images[imageOffset];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = "100%";

document.body.appendChild(bgImage);