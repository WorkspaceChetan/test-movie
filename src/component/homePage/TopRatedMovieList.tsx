import MovieList from "component/movieList";
import { useState, useEffect } from "react";
import { TopRatedMovies } from "service/topratedmovies.service";
import { WatchListServices } from "service/watchlist.service";
import { Movie } from "types/Movie";

const TopRatedMovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let movieData = await TopRatedMovies.getTopRatedMovies();

      const watchliatData = await WatchListServices.getWatchList();

      movieData = movieData.map((x) => {
        x.isAddedToWatchlist = Boolean(
          watchliatData.filter((y) => y === x.id).length
        );
        return x;
      });
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  const handleSetMovies = (val: Movie[]) => {
    setMovies(val);
  };

  return <MovieList movies={movies} handleSetMovies={handleSetMovies} />;
};

export default TopRatedMovieList;
