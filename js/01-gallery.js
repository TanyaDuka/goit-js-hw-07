import { galleryItems } from './gallery-items.js';
//Change code below this line
const galleryBox = document.querySelector('.gallery');

const createGallery = galleryItems => {
    return galleryItems.map(({preview, original, description})  => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    }).join(' ');
}

galleryBox.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const onClickGalleryItem = (event) => {
     if (!event.target.classList.contains('gallery__image')) {
    return;
     }
    
    event.preventDefault();
    let urlBigPhoto = event.target.dataset.source;
    console.log(urlBigPhoto);
    createInstance(urlBigPhoto);
}

const  createInstance = (img) => {
    instance = basicLightbox.create(`
            <img src='${img}>'
            `);
    
    instance.show();
}

galleryBox.addEventListener('click', onClickGalleryItem);

