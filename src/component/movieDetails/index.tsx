import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Typography from "@mui/material/Typography";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Movies } from "../../service/movies.service";
import { Dialog } from "@mui/material";
import {
  MovieDetailsButton,
  MovieDetailsButtonBox,
  MovieDetailsFristBox,
  MovieDetailsIcon,
  MovieDetailsImg,
  MovieDetailsMainBox,
  MovieDetailsSecBox,
  MovieDetailsSecText,
  MovieDetailsText,
  MovieDetailsTextTyprographt,
  MovieDetailsThirdBox,
  MovieDetailsDialogContain,
  MovieDetailsDividerContain,
  MovieDetailsTypographyContain,
  MovieDetailsSpan,
  MovieDetailsSecSpan,
} from "./movieDetails.styled";
import { WatchListServices } from "service/watchlist.service";
import { Movie } from "types/Movie";

const MovieDetailsDialog = ({
  open,
  close,
  movieId,
  handleSetMovies,
}: {
  open: boolean;
  close: () => void;
  movieId: number;
  handleSetMovies: (val: Movie[]) => void;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let movieData = await Movies.getMovies();
      const particularMovie = movieData.filter((x) => x.id === movieId);
      setMovies(particularMovie);
    };
    fetchMovies();
  }, [movieId]);

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

  return (
    <>
      <Dialog open={open} onClose={close} fullWidth scroll="body">
        <MovieDetailsMainBox>
          <MovieDetailsFristBox>
            <MovieDetailsButtonBox onClick={close} aria-label="close">
              <CloseIcon />
            </MovieDetailsButtonBox>
            <MovieDetailsDialogContain dividers>
              {movies.map((movie) => (
                <>
                  <Box>
                    <MovieDetailsImg
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    />
                    <MovieDetailsSecBox>
                      <MovieDetailsButton>
                        <PlayArrowRoundedIcon />
                        <Typography color="#f2f2f2">Play</Typography>
                      </MovieDetailsButton>
                      <MovieDetailsIcon
                        onClick={() => handleClickAddToWatchlist(movie.id)}
                      >
                        <AddRoundedIcon
                          sx={{
                            color: movie.isAddedToWatchlist
                              ? "#ff0000"
                              : "#fff",
                          }}
                        />
                      </MovieDetailsIcon>
                    </MovieDetailsSecBox>
                  </Box>

                  <MovieDetailsThirdBox>
                    <Box key={movie.id}>
                      <MovieDetailsText>
                        {movie.original_title}
                      </MovieDetailsText>
                      <MovieDetailsSecText>
                        {movie.overview}
                      </MovieDetailsSecText>

                      <MovieDetailsDividerContain
                        orientation="horizontal"
                        flexItem
                      />
                      <MovieDetailsTextTyprographt>
                        Info on{" "}
                        <MovieDetailsSecSpan>
                          {movie.original_title}
                        </MovieDetailsSecSpan>
                      </MovieDetailsTextTyprographt>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Genres:</MovieDetailsSpan> Science
                        Fiction, Adventure, Action
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Release date:</MovieDetailsSpan>{" "}
                        {movie.release_date}
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Average vote:</MovieDetailsSpan>{" "}
                        {movie.vote_average}
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan>Original language:</MovieDetailsSpan>{" "}
                        {movie.original_language}
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan>
                          {" "}
                          Age classification:
                        </MovieDetailsSpan>{" "}
                        Suitable for all ages
                      </MovieDetailsTypographyContain>
                    </Box>
                  </MovieDetailsThirdBox>
                </>
              ))}
            </MovieDetailsDialogContain>
          </MovieDetailsFristBox>
        </MovieDetailsMainBox>
      </Dialog>
    </>
  );
};

export default MovieDetailsDialog;
