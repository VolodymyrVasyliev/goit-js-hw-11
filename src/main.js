import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPhoto } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query === '') {
    return iziToast.warning({
      message: 'Please try again! Write something.',
      position: 'topRight',
      color: 'red',
    });
  }

  loader.classList.remove('is-hidden');

  getPhoto(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
        gallery.innerHTML = '';
        return;
      }
      gallery.innerHTML = '';
      imageTemplate(data.hits);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      gallery.innerHTML = '';
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
  searchInput.value = '';
}

function renderImages(images) {
  gallery.innerHTML = imageTemplate(images);
}
