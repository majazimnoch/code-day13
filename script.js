const art = document.getElementById("art");
let currentPage = 1;
const limit = 100;

const artworkDetails = async (artworkId) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`);
    return await response.json();
}

const getRandomArtwork = () => {
    const apiUrl = 'https://api.artic.edu/api/v1/artworks';

    fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`)
        .then((response) => response.json())
        .then((json) => {
            const artworks = json.data;

            // Get a random index to select a random artwork
            const randomIndex = Math.floor(Math.random() * artworks.length);
            const randomArtwork = artworks[randomIndex];

            // Display information about the random artwork
            if (randomArtwork) {
                displayArtworkDetails(randomArtwork);
            } else {
                art.innerHTML = `<p>No artworks available.</p>`;
            }
        })
        .catch((error) => {
            console.error("Error fetching data", error);
            art.innerHTML = `<p>Error fetching data.</p>`;
        });
}

const displayArtworkDetails = (artwork) => {
    const title = artwork.title;
    const artistDisplay = artwork.artist_display;
    const imageId = artwork.image_id;

    // Constructing the Image API URL
    const iiifUrl = "https://www.artic.edu/iiif/2";
    const imageUrl = `${iiifUrl}/${imageId}/full/400,/0/default.jpg`;

    artworkDetails(artwork.id)
        .then((details) => {
            const description = details.data.description || "We have no description for this artwork, yet!"

            // Info about the artwork
            art.innerHTML = `
                <div class="artwork-container">
                    <h2>${title}</h2>
                    <h3>${artistDisplay}</h3>
                    <img src="${imageUrl}" alt="${title}" class="artwork-image">
                    <p>${description}</p>
                </div>
            `;
        })
        .catch((error) => {
            console.error('Error fetching artwork details:', error);
        });
}

// Initial display of a random artwork
getRandomArtwork();
