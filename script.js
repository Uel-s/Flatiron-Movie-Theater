//Creating a function for our code
function flatironTheater() {
  // Created a fetch to get our info from JSON
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((movies) => {
      const flatmovies = document.getElementById("films");

      movies.forEach((movie) => {
        const list = document.createElement("li");
        flatmovies.appendChild(list);

        const anchor = document.createElement("a");
        anchor.href = " http://localhost:3000/films";
        list.appendChild(anchor);

        anchor.textContent = `${movie.title}, ${movie.id}`;

        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          displayMovieDetails(movie);
        });
      });
    });
}

// Display movies' information when clicked
function displayMovieDetails(movie) {
  document.querySelector("#poster").src = movie.poster;
  document.querySelector("#title").textContent = movie.title;
  document.querySelector(
    "#runtime"
  ).textContent = `Runtime: ${movie.runtime} min`;
  document.querySelector(
    "#showtime"
  ).textContent = `Showtime: ${movie.showtime}`;

  const availability = movie.capacity;
  const ticketsPurchased = movie.tickets_sold;
  const availableTickets = availability - ticketsPurchased;
  let ticketUpdate;

  document.querySelector("#availableTickets").textContent = ticketUpdate;
  document.querySelector("#description").textContent = movie.description;

  const ticketButton = document.querySelector("#buyTickets");

  ticketButton.addEventListener("click", () => {
    const buyticket = `${ticketUpdate--} `;

    console.log(buyticket);
  });

  let newButton = document.querySelector("#status");

  if (availableTickets > 0) {
    newButton.textContent = "OBTAINABLE";
  } else {
    newButton.textContent = "SOLD OUT";
  }

  if (availableTickets === 0) {
    ticketButton.disabled = true;
  } else {
    ticketButton.disabled = false;
    ticketButton.textContent = "Purchase Ticket";
  }
}

// Initializing the code
function init() {
  flatironTheater();
}

document.addEventListener("DOMContentLoaded", init);
