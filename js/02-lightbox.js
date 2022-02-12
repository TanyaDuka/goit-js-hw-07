import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const createGallery = galleryItems => {
    return galleryItems.map(({preview, original, description})  => {
        return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
`
    }).join(' ');
}

galleryBox.insertAdjacentHTML('beforeend', createGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});