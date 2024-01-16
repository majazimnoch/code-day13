# Art Generator with Art Institute of Chicago's API

## Intro
This is the thirteenth project of my 30-day coding challenge. The project includes following tech stuff: HTML, CSS, JavaScript, API.

## Idea
The idea was to make a modern and simple website showing a random piece of artwork from AIC, using their public API: img, title, aauthor and some description. I also added a quote to the footer.

## Breaking down the code

This JavaScript code fetches random artwork information from the Art Institute of Chicago API.

`const art = document.getElementById("art");`
This part retrieves an HTML element with the id "art" and assigns it to the variable art.
`let currentPage = 1;` Initializes a variable to keep track of the current page number for API requests.

`artworkDetails` is an asynchronous function that takes an artworkId as a parameter.
It makes a fetch request to the Art Institute of Chicago API to get detailed information about a specific artwork.
The function returns a Promise that resolves to the JSON response.

`getRandomArtwork` function is called initially to display a random artwork.
It constructs the API URL and fetches a random set of artworks from the API.
Once the data is fetched, a random artwork is selected, and its details are displayed using the `displayArtworkDetails` function.

The HTML structure includes a `container (artwork-container)` with two nested divs:
The first div `image-wrapper` contains the artwork image (artwork-image-desktop) and is set to occupy 50% of the width.
The second div `artwork-container-wrapper` contains details such as title, artist, another image (artwork-image), and a description.

## Demo
Click <a href="https://fastidious-babka-6479df.netlify.app/"> here </a>.
