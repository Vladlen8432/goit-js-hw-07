import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) => `<li>
  <a class = "gallery-link" href = "${item.original}">
    <img class = "gallery-image" src = "${item.preview}" alt = "${item.description}" style= "width: 100%; height: 100%" data-source ="${item.original}">
  </a>
</li>`
  )
  .join("");

galleryList.innerHTML = galleryItem;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captions: true,
  animationSpeed: 250,
});
