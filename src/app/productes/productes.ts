import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productes',
  imports: [NgFor],
  templateUrl: './productes.html',
  styleUrl: './productes.css'
})
export class Productes {
  
  movies  = {
    "popular": [
      {
        "title": "The Dark Knight",
        "vote_average": 9.0,
        "poster_url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      },
      {
        "title": "Inception",
        "vote_average": 8.8,
        "poster_url": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      },
      {
        "title": "Interstellar",
        "vote_average": 8.6,
        "poster_url": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      },
      {
        "title": "The Matrix",
        "vote_average": 8.7,
        "poster_url": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
      },
      {
        "title": "Gladiator",
        "vote_average": 8.5,
        "poster_url": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
      },
      {
        "title": "The Lion King",
        "vote_average": 8.5,
        "poster_url": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
      },
      {
        "title": "Avatar",
        "vote_average": 7.9,
        "poster_url": "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
      }
    ],
    "top_rated": [
      {
        "title": "The Godfather",
        "vote_average": 9.2,
        "poster_url": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
      },
      {
        "title": "The Shawshank Redemption",
        "vote_average": 9.3,
        "poster_url": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
      },
      {
        "title": "Schindler's List",
        "vote_average": 9.0,
        "poster_url": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
      },
      {
        "title": "Pulp Fiction",
        "vote_average": 8.9,
        "poster_url": "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg"
      },
      {
        "title": "Fight Club",
        "vote_average": 8.8,
        "poster_url": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
      },
      {
        "title": "Forrest Gump",
        "vote_average": 8.8,
        "poster_url": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
      },
      {
        "title": "Goodfellas",
        "vote_average": 8.7,
        "poster_url": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"
      }
    ],
    "upcoming": [
      {
        "title": "Dune: Part Two",
        "vote_average": 8.5,
        "poster_url": "https://image.tmdb.org/t/p/w500/8b8R8l88Qjgo5bM0lN5ZL0uFJzP.jpg"
      },
      {
        "title": "Deadpool 3",
        "vote_average": 8.1,
        "poster_url": "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg"
      },
      {
        "title": "Avengers: Secret Wars",
        "vote_average": 8.0,
        "poster_url": "https://image.tmdb.org/t/p/w500/wAa4JH6VpWkFZ7iQFv0mPnjmGZ6.jpg"
      },
      {
        "title": "Joker: Folie à Deux",
        "vote_average": 8.4,
        "poster_url": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
      },
      {
        "title": "Mission: Impossible 8",
        "vote_average": 8.2,
        "poster_url": "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pWzAG60AKUvAA.jpg"
      },
      {
        "title": "Frozen 3",
        "vote_average": 7.9,
        "poster_url": "https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg"
      }
    ]
  };
  

}
