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
  movieDetails,
  handleToggleWatchList,
}: {
  open: boolean;
  close: () => void;
  movieDetails: Movie | null;
  handleToggleWatchList: (val: number) => void;
}) => {
  const handleClickAddToWatchlist = (id: number, isFavorite?: boolean) => {
    if (isFavorite) {
      WatchListServices.removeFromWatchList(id);
    } else {
      WatchListServices.addToWatchList(id);
    }
    handleToggleWatchList(id);
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
              {movieDetails && (
                <>
                  <Box>
                    <MovieDetailsImg
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                    />
                    <MovieDetailsSecBox>
                      <MovieDetailsButton>
                        <PlayArrowRoundedIcon />
                        <Typography color="#f2f2f2">Play</Typography>
                      </MovieDetailsButton>
                      <MovieDetailsIcon
                        onClick={() =>
                          handleClickAddToWatchlist(movieDetails.id)
                        }
                      >
                        <AddRoundedIcon
                          sx={{
                            color: movieDetails.isAddedToWatchlist
                              ? "#ff0000"
                              : "#fff",
                          }}
                        />
                      </MovieDetailsIcon>
                    </MovieDetailsSecBox>
                  </Box>

                  <MovieDetailsThirdBox>
                    <Box key={movieDetails.id}>
                      <MovieDetailsText>
                        {movieDetails.original_title}
                      </MovieDetailsText>
                      <MovieDetailsSecText>
                        {movieDetails.overview}
                      </MovieDetailsSecText>

                      <MovieDetailsDividerContain
                        orientation="horizontal"
                        flexItem
                      />
                      <MovieDetailsTextTyprographt>
                        Info on{" "}
                        <MovieDetailsSecSpan>
                          {movieDetails.original_title}
                        </MovieDetailsSecSpan>
                      </MovieDetailsTextTyprographt>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Genres:</MovieDetailsSpan> Science
                        Fiction, Adventure, Action
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Release date:</MovieDetailsSpan>{" "}
                        {movieDetails.release_date}
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan> Average vote:</MovieDetailsSpan>{" "}
                        {movieDetails.vote_average}
                      </MovieDetailsTypographyContain>

                      <MovieDetailsTypographyContain>
                        <MovieDetailsSpan>Original language:</MovieDetailsSpan>{" "}
                        {movieDetails.original_language}
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
              )}
            </MovieDetailsDialogContain>
          </MovieDetailsFristBox>
        </MovieDetailsMainBox>
      </Dialog>
    </>
  );
};

export default MovieDetailsDialog;
