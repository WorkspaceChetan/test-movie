import { Typography, useMediaQuery, useTheme } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import {
  HomePageButton,
  HomePageMainBox,
  HomePageSecButton,
  HomePageTextBox,
} from "./homePageText.Styled";
import { HeaderBoxContainer, HeaderTextContain } from "./header.styled";

const HomePageText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HomePageMainBox>
      <HomePageTextBox variant={isMobile ? "h4" : "h2"}>
        Disenchantment
      </HomePageTextBox>

      <HeaderBoxContainer>
        <HomePageButton>
          <PlayArrowRoundedIcon />
          <Typography color="#f2f2f2">Play</Typography>
        </HomePageButton>
        <HomePageSecButton>
          <InfoRoundedIcon />
          <Typography color="#f2f2f2" ml="8px">
            More info
          </Typography>
        </HomePageSecButton>
      </HeaderBoxContainer>
      <HeaderTextContain>
        Set in a ruined medieval city called Dreamland, Disenchantment follows
        the grubby adventures of a hard-drinking princess, her feisty elf
        companion an...
      </HeaderTextContain>
    </HomePageMainBox>
  );
};

export default HomePageText;
