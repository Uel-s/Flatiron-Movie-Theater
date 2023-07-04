// Creating a function for our code
function flatironTheater() {
  // Created a fetch to get our info from JSON
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((movies) => {
      const flatmovies = document.getElementById("films");

      movies.forEach((movie) => {
        const list = document.createElement("li"); // creating element list for movie titles

        flatmovies.appendChild(list); // adding list to our json information

        const anchor = document.createElement("a");
        anchor.href = " http://localhost:3000/films"; // linking all information from JSON
        list.appendChild(anchor);

        anchor.textContent = `${movie.title}, ${movie.id}`; // link arranges the movies in order as per the JSON

        anchor.addEventListener("click", (e) => {
          // enabling clicking function when a movie title is selected
          e.preventDefault(); // prevent ending up in JSON window

          displayMovieDetails(movie); // displays the remaining content from JSON
        });
      });
    });
}

// Display movies' information when clicked
function displayMovieDetails(movie) {
  document.querySelector("#poster").src = movie.poster; // under the img tag in HTML

  document.querySelector("#title").textContent = movie.title; // including content from HTML "title" to JS

  document.querySelector("#runtime").textContent = `Runtime: ${movie.runtime} min`; // shows how long the movie is

  document.querySelector("#showtime").textContent = `Showtime: ${movie.showtime}`; // display the time the movie is starting

  document.querySelector("#description").textContent = movie.description; // a preview of what to expect from the movie

  // Display tickets availability
  const availability = movie.capacity;
  const ticketsPurchased = movie.tickets_sold;
  let availableTickets = availability - ticketsPurchased;

  // Update available tickets display
  const availableTicketsElement = document.querySelector("#availableTickets");
  const ticketButton = document.querySelector("#buyTickets");

  if (availableTickets > 0) {
    availableTicketsElement.textContent = `Obtainable Tickets: ${availableTickets}`;
    ticketButton.textContent = "Buy Tickets";
    ticketButton.disabled = false;
  } else {
    availableTicketsElement.textContent = "Sold Out";
    ticketButton.textContent = "Sold Out";
    ticketButton.disabled = true;
  }

  // Buy tickets button event listener
  ticketButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (availableTickets > 0) {
      availableTickets--;
      availableTicketsElement.textContent = `Obtainable Tickets: ${availableTickets}`;

      if (availableTickets === 0) {
        ticketButton.textContent = "Sold Out";
        ticketButton.disabled = true;
      }
    }
  });
}

// Initialize and callback
function init() {
  flatironTheater();
}

document.addEventListener("DOMContentLoaded", init);