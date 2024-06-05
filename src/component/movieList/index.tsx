import { useMemo, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { WatchListServices } from "../../service/watchlist.service";
import {
  MovieListFirstBox,
  MovieListFivedBox,
  MovieListFourdBox,
  MovieListPaginationdBox,
  MovieListSecBox,
  MovieListThirdBox,
  MovieListTitleText,
  UIStyledMovieBox,
  MovieListSubTitleText,
  MovieListStack,
  MovieListBoxContain,
  MovieListImgContain,
} from "./movieList.styled";
import { Movie } from "types/Movie";
import MovieDetailsDialog from "../movieDetails";

const MovieList = ({
  movies,
  handleSetMovies,
}: {
  movies: Movie[];
  handleSetMovies: (val: Movie[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState(0);

  const openHandle = (id: number) => {
    setMovieId(id);
    setOpen(true);
  };

  const closeHandle = () => {
    setOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleClickAddToWatchlist = (id: number) => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    if (watchlist.includes(id)) {
      watchlist = watchlist.filter((movieId: number) => movieId !== id);
      WatchListServices.removeFromWatchList(id);
    } else {
      watchlist.push(id);
      WatchListServices.addToWatchList(id);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    const updatedMovies = movies.map((movie) =>
      movie.id === id
        ? { ...movie, isAddedToWatchlist: !movie.isAddedToWatchlist }
        : movie
    );
    handleSetMovies(updatedMovies);
  };

  const currentMovies = useMemo(() => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    return movies.slice(indexOfFirstMovie, indexOfLastMovie);
  }, [currentPage, movies]);

  return (
    <UIStyledMovieBox>
      <MovieListFirstBox>
        <MovieListSecBox>
          {currentMovies.map((movie) => (
            <MovieListThirdBox key={movie.id}>
              <MovieListImgContain
                onClick={() => openHandle(movie.id)}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
              />
              <MovieListBoxContain>
                <MovieListFourdBox>
                  <PlayArrowRoundedIcon />
                </MovieListFourdBox>
                <MovieListFivedBox
                  onClick={() => handleClickAddToWatchlist(movie.id)}
                >
                  <AddRoundedIcon
                    sx={{
                      color: movie.isAddedToWatchlist ? "#ff0000" : "#fff",
                    }}
                  />
                </MovieListFivedBox>
              </MovieListBoxContain>
              <MovieListTitleText onClick={() => openHandle(movie.id)}>
                {movie.original_title}
              </MovieListTitleText>
              <MovieListSubTitleText onClick={() => openHandle(movie.id)}>
                {movie.overview}
              </MovieListSubTitleText>
            </MovieListThirdBox>
          ))}
        </MovieListSecBox>
        <MovieListStack spacing={2}>
          <MovieListPaginationdBox
            count={Math.ceil(movies.length / moviesPerPage)}
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </MovieListStack>
      </MovieListFirstBox>
      <MovieDetailsDialog
        open={open}
        close={closeHandle}
        movieId={movieId}
        handleSetMovies={handleSetMovies}
      />
    </UIStyledMovieBox>
  );
};

export default MovieList;
