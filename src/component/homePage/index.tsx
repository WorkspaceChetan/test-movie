import Box from "@mui/material/Box";
import Header from "./header";
import HomePageText from "./homePageText";
import {
  HomeMainBox,
  HomePageStyledBox,
  HomeSecBox,
  HomeThirdBox,
} from "./homePage.styled";
import TopRatedMovieList from "./TopRatedMovieList";
import UpcomingMovieList from "./UpcomingMovieList";
import PopularMovieList from "./PopularMovie";
import NowPlayingMovieList from "./NowPlaying";
import { MovieListText } from "component/movieList/movieList.styled";

const HomePage = () => {
  return (
    <Box>
      <HomePageStyledBox />
      <HomeMainBox>
        <Header />
      </HomeMainBox>
      <HomeSecBox>
        <HomePageText />
      </HomeSecBox>
      <HomeThirdBox>
        <MovieListText>Popular Movies</MovieListText>
        <PopularMovieList />
        <MovieListText>Top Rated Movies</MovieListText>
        <TopRatedMovieList />
        <MovieListText>NowPlaying Movies</MovieListText>
        <NowPlayingMovieList />
        <UpcomingMovieList />
      </HomeThirdBox>
    </Box>
  );
};

export default HomePage;
