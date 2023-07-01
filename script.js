// creating a function for our code

function flatironTheater (movies){

 // created a fetch to get our info from json

    fetch ("http://localhost:3000/films")  

    .then (res => res.json () ) 

    .then(movies =>{

       const flatmovies = document.getElementById("films")

       movies.forEach(movie =>{

        const list = document.createElement("li")

        flatmovies.appendChild(list)

        const anchor = document.createElement("a")

        anchor.href `http://localhost:3000/films`

        list.appendChild(anchor)

        anchor.textContent = `${movie.title}, ${movie.id}`

        anchor.addEventListener("click", (e)=>{

            e.preventDefault()
            
        })

       })

    })

    // Display movies' information when clicked 

function displaymovieDetails(movies){

    document.getElementById("poster"). src = movies.poster

    document.getElementById("title").textContent = movies.title

    document.getElementById("runtime").textContent = `Runtime:${movies.runtime} min`

    document.getElementById("showtime").textContent = `Showtime: ${movies.showtime}`

    const availability = movies.capacity

    const ticketspurchased = movies.ticketsSold

    const availableTickets = availability - ticketspurchased

    if (availableTickets > 0){

        ticketUpdate = `${availableTickets} OBTAINABLE`
    }else {

         ticketUpdate = `${availableTickets} SOLD OUT`
    }
     
    

    document.getElementById("availableTickets").textContent = ticketUpdate

    document.getElementById("description").textContent = movies.description

    
}

}




