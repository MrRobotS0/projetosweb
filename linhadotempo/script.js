const data = {
    "1970s": [
      {
        title: "The Godfather",
        year: 1972,
        poster: "https://image.tmdb.org/t/p/w200/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
      },
      {
        title: "Star Wars",
        year: 1977,
        poster: "https://image.tmdb.org/t/p/w200/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
      }
    ],
    "1980s": [
      {
        title: "E.T.",
        year: 1982,
        poster: "https://image.tmdb.org/t/p/w200/2DtPSyODKWXluIRV7PVru0SSzja.jpg"
      },
      {
        title: "Back to the Future",
        year: 1985,
        poster: "https://image.tmdb.org/t/p/w200/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg"
      }
    ],
    "1990s": [
      {
        title: "Titanic",
        year: 1997,
        poster: "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
      },
      {
        title: "Matrix",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
      }
    ],
    "2000s": [
      {
        title: "Gladiator",
        year: 2000,
        poster: "https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
      },
      {
        title: "The Dark Knight",
        year: 2008,
        poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      }
    ]
  };
  
  const timeline = document.getElementById("timeline");
  
  for (const decade in data) {
    const section = document.createElement("section");
    section.className = "decade-section";
  
    const title = document.createElement("h2");
    title.className = "decade-title";
    title.textContent = decade;
    section.appendChild(title);
  
    const grid = document.createElement("div");
    grid.className = "movies-grid";
  
    data[decade].forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
  
      const img = document.createElement("img");
      img.src = movie.poster;
      img.alt = movie.title;
      img.className = "movie-poster";
  
      const info = document.createElement("div");
      info.className = "movie-info";
  
      const movieTitle = document.createElement("div");
      movieTitle.className = "movie-title";
      movieTitle.textContent = movie.title;
  
      const movieYear = document.createElement("div");
      movieYear.className = "movie-year";
      movieYear.textContent = movie.year;
  
      info.appendChild(movieTitle);
      info.appendChild(movieYear);
      card.appendChild(img);
      card.appendChild(info);
      grid.appendChild(card);
    });
  
    section.appendChild(grid);
    timeline.appendChild(section);
  }
  