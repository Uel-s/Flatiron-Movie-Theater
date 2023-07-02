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

  document.querySelector( "#runtime" ).textContent = `Runtime: ${movie.runtime} min`;  // concatinating constant text to movie

  document.querySelector( "#showtime" ).textContent = `Showtime: ${movie.showtime}`; 

   document.querySelector("#description").textContent = movie.description;


  const availability = movie.capacity;
  const ticketsPurchased = movie.tickets_sold;
  const availableTickets = availability - ticketsPurchased;
  let ticketUpdate = availableTickets

  if (availableTickets > 0) {
    document.querySelector("#availableTickets").textContent = ticketUpdate;
   
    const ticketButton = document.querySelector("#buyTickets");

    ticketButton.addEventListener("click", (e) => {
   
     const  spider = e.target

      const buyticket = `${ticketUpdate--}`;

      console.log(buyticket);

      if (availableTickets === 0) {
        spider.disabled = true;
      } else {
        spider.disabled = false;
       spider.textContent = "Purchase Ticket";
      }
    });

    let newButton = document.querySelector("#status");

    

    if (availableTickets > 0) {
      newButton.textContent = "OBTAINABLE";
    } else {
      newButton.textContent = "SOLD OUT";
    }
  } 


}
// Initializing the code
function init() {
  flatironTheater();
}

document.addEventListener("DOMContentLoaded", init);
