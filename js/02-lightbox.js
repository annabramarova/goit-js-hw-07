import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({preview, original, description})=> {
        return `
        <li>
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
        </a>
        </li>`;
    }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
})