import Toolbar from "@mui/material/Toolbar";
import {
  HeaderImg,
  HeaderMainBox,
  HeaderTextContainer,
  StyledAppBar,
  StyledTextFieldContain,
} from "./header.styled";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <HeaderMainBox>
      <StyledAppBar position="static">
        <Toolbar>
          <HeaderImg src="./images/logo.png" />
          <HeaderTextContainer>Home</HeaderTextContainer>
          <StyledTextFieldContain
            variant="outlined"
            placeholder="Search..."
            size="small"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Toolbar>
      </StyledAppBar>
    </HeaderMainBox>
  );
};

export default Header;
