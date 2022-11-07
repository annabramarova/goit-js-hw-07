import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({preview, original, description})=> {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
    }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onImgClick);

function onImgClick (e) {
    e.preventDefault();
    
	if (e.target.nodeName !== 'IMG') {
        return;
    }
    
	const selectedImage = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
    instance.show();
    
    galleryContainer.addEventListener('keydown', onEscPress);

    function onEscPress(e) {
		if (e.code === 'Escape') {
        instance.close();
        galleryContainer.removeEventListener("keydown", onEscPress);   
		}
    }
}

