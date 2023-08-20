import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery-link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery-image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.style.width = "100%";
  galleryImage.style.height = "100%";
  galleryImage.setAttribute("data-source", item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
  animationSpeed: 250,
});