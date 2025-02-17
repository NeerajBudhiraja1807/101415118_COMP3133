// resolvers.js
let movies = [
    {
      id: '1',
      name: 'Inception',
      director_name: 'Christopher Nolan',
      production_house: 'Warner Bros.',
      release_date: '2010-07-16',
      rating: 8.8,
    },
    {
      id: '2',
      name: 'The Dark Knight',
      director_name: 'Christopher Nolan',
      production_house: 'Warner Bros.',
      release_date: '2008-07-18',
      rating: 9.0,
    },
  ];
  
  const resolvers = {
    Query: {
      movies: () => movies,
      movie: (parent, args) => movies.find((movie) => movie.id === args.id),
    },
  
    Mutation: {
      addMovie: (parent, args) => {
        const newMovie = {
          id: String(movies.length + 1),
          name: args.name,
          director_name: args.director_name,
          production_house: args.production_house,
          release_date: args.release_date,
          rating: args.rating,
        };
        movies.push(newMovie);
        return newMovie;
      },
  
      updateMovie: (parent, args) => {
        const movieIndex = movies.findIndex((movie) => movie.id === args.id);
        if (movieIndex === -1) {
          throw new Error('Movie not found');
        }
        const updatedMovie = {
          ...movies[movieIndex],
          name: args.name || movies[movieIndex].name,
          director_name: args.director_name || movies[movieIndex].director_name,
          production_house: args.production_house || movies[movieIndex].production_house,
          release_date: args.release_date || movies[movieIndex].release_date,
          rating: args.rating || movies[movieIndex].rating,
        };
        movies[movieIndex] = updatedMovie;
        return updatedMovie;
      },
  
      deleteMovie: (parent, args) => {
        const movieIndex = movies.findIndex((movie) => movie.id === args.id);
        if (movieIndex === -1) {
          throw new Error('Movie not found');
        }
      
        const deletedMovie = movies.splice(movieIndex, 1)[0];
        console.log("Movie deleted successfully:", deletedMovie.name); // Log the deleted movie name
        return {
          message: "Movie deleted successfully",
          movie: deletedMovie, // Return the deleted movie details
        };
      },
    },
    };
  
  module.exports = resolvers;