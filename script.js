const art = document.getElementById("art");
const artworkDetails = async (artworkId) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`);
    return await response.json();
}

fetch("https://api.artic.edu/api/v1/artworks")
  .then((response) => response.json())
  .then((json) => {
    const artworks = json.data;

    // Total numbers of artworks
    art.innerHTML = `
        <h1>There are ${json.pagination.total} artworks in this database.</h1>
        <a href="http://127.0.0.1:5500/index.html" id="reload" class="button">Click here to get a new artwork</a>
        `;

    // Here we get a random index to later on select a random artwork
    const randomIndex = Math.floor(Math.random() * artworks.length);
    const randomArtwork = artworks[randomIndex];

     // Display information about the random artwork
     if (randomArtwork) {
        const title = randomArtwork.title;
        const artistDisplay = randomArtwork.artist_display;
        const imageId = randomArtwork.image_id;
        
        // Constructing the Image API URL
        const iiifUrl = "https://www.artic.edu/iiif/2";
        const imageUrl = `${iiifUrl}/${imageId}/full/400,/0/default.jpg`;

        artworkDetails(randomArtwork.id)
            .then((details) => {
                const description = details.data.description || "We have no description for this artwork, yet!"

            // Info about a random artwork
            art.innerHTML += `
                <div class="artwork-container">
                    <h2>${title}</h2>
                    <h3>${artistDisplay}<h3>
                    <img src="${imageUrl}" alt="${title}" class="artwork-image">
                    <p>${description}</p>
                </div>
            `;
            
            })
            .catch((error) => {
                console.error('Error fetching artwork details:', error)
            });

    } else {
      art.innerHTML += `<p>No artworks available.</p>`;
    }
  })
  .catch((error) => {
    console.error("Error fetching data");
    art.innerHTML = `<p>Error fetching data.</p>`;
  });

