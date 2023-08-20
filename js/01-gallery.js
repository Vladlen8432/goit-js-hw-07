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
  galleryImage.setAttribute("data-source", item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const imageSource = event.target.getAttribute("data-source");
    const imageAlt = event.target.alt;
    const instance = basicLightbox.create(
      `<img src = "${imageSource}" alt = "${imageAlt}">`
    );
    instance.show();

    const closeModal = (event) => {
      if (event.key === "Escape") {
        instance.close();
        window.removeEventListener("keydown", closeModal);
      }
    };

    window.addEventListener("keydown", closeModal);
  }
});

console.log(galleryItems);
