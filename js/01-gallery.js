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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const imageSource = event.target.getAttribute("data-source");
  const imageAlt = event.target.alt;
  const instance = basicLightbox.create(
    `<img src = "${imageSource}" alt = "${imageAlt}">`
  );
  instance.show();

  const closeModal = (event) => {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    }
  };

  document.addEventListener("keydown", closeModal);
});

console.log(galleryItems);
