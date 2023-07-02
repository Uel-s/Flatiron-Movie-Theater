//Creating a function for our code
function flatironTheater() {
  // Created a fetch to get our info from JSON
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((movies) => {
      const flatmovies = document.getElementById("films");

      movies.forEach((movie) => {

        const list = document.createElement("li") // creating element list for movie titles 

        flatmovies.appendChild(list); // adding list to our json infomation

        const anchor = document.createElement("a");
        anchor.href = " http://localhost:3000/films";   // linking all information from json
        list.appendChild(anchor);

        anchor.textContent = `${movie.title}, ${movie.id}`; // link arranges the movies in order as per the json

        anchor.addEventListener("click", (e) => {  // enabling clicking function when a movie title is selected

         e.preventDefault();                     // prevent ending up in json window

           displayMovieDetails(movie);      // displays  the remaining content from json 
        });
      });
    });
}

// Display movies' information when clicked
function displayMovieDetails(movie) {
  document.querySelector("#poster").src = movie.poster;  // under the img tag in html

  document.querySelector("#title").textContent = movie.title;   // including content from html "title" to js

  document.querySelector( "#runtime" ).textContent = `Runtime: ${movie.runtime} min`;  // shows how long the movie is

  document.querySelector( "#showtime" ).textContent = `Showtime: ${movie.showtime}`;  // display  the time the movie is starting

   document.querySelector("#description").textContent = movie.description; // a preview of what to expect from the movie

 
    // display tickets available

  const availability = movie.capacity;

  const ticketsPurchased = movie.tickets_sold; 

  const availableTickets = availability - ticketsPurchased;

 // display tickets available

  let ticketUpdate = availableTickets

  if (availableTickets > 0) {

    document.querySelector("#availableTickets").textContent = ticketUpdate;


    // adding eventlistener to the ticket
   
    const ticketButton = document.querySelector("#buyTickets");

    ticketButton.addEventListener("click", (e) => {
   
     const  change = e.target     // represents the actual button clicked, if the tickets are sold out.

      const buyticket = `${ticketUpdate--}`; // once a ticket is bought it deducts that one ticket bought

      console.log(buyticket);

      if (availableTickets === 0) {

        change.disable = true;

      } else {

        change.disable = false;

       change.textContent = "Purchase Ticket";   // if there tickect are available purchase

      }
    });


    // displays if tickects are sold out or not 

    let newButton = document.querySelector("#status");

    

    if (availableTickets > 0) {
      newButton.textContent = "OBTAINABLE";

    } else {

      newButton.textContent = "SOLD OUT";
    }

  } 

} 

// Initialize and callback 

function init() {

  flatironTheater();

}

document.addEventListener("DOMContentLoaded", init);
