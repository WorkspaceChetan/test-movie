import MovieList from "component/movieList";
import { useState, useEffect } from "react";
import { UpComingMovies } from "service/upcoming.service";
import { WatchListServices } from "service/watchlist.service";
import { Movie } from "types/Movie";

const UpcomingMovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  console.log("kikjij");

  useEffect(() => {
    const fetchMovies = async () => {
      let movieData = await UpComingMovies.getUpComingMovies();
      console.log(movieData, "movieData");

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

export default UpcomingMovieList;
