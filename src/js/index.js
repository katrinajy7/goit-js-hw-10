import { fetchBreeds, fetchCatBreed } from "./cat-api";

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');


loaderEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

// CREATE THE OPTIONS
function chooseBreed() {
    loaderEl.classList.remove('is-hidden'); 

    fetchBreeds().then(data => {
        loaderEl.classList.add('is-hidden'); 

        let optionsMarkup = data.map(({ id, name }) => {
            return `<option value="${id}">${name}</option>`;
        });

        breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);
        breedSelectEl.classList.remove('is-hidden');
    });
}

chooseBreed();

breedSelectEl.addEventListener('change', e => {
    loaderEl.classList.remove('is-hidden'); 
    catInfoEl.classList.add('is-hidden'); 

    let breedId = e.target.value;

    fetchCatBreed(breedId).then(data => {
        const { url, breeds } = data[0];
        const { name, description, temperament } = breeds[0];

        catInfoEl.innerHTML = `
            <img src="${url}" alt="${name}" width="400"/>
            <div>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>${temperament}</p>
            </div>
        `;

        catInfoEl.classList.remove('is-hidden');
        loaderEl.classList.add('is-hidden'); 
    });
});
