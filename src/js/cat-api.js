const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = 'live_ZpjOXPKfbgGxGoFSo2jNG1QLR0nUB3VgMZc32OriSajdPzWoIvS4wSLDkOdzsyP8';

// FETCH ALL THE BREEDS FOR THE DROPDOWN LIST
export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`, {
        headers: {
            'x-api-key': API_KEY, // Corrected the header key to lowercase 'x-api-key'
        },      
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    });
}

// FETCH THE SPECIFIC CAT BREED BASED ON WHAT IS SELECTED
export function fetchCatBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
        headers: {
            'x-api-key': API_KEY, // Corrected the header key to lowercase 'x-api-key'
        },      
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    });
}
