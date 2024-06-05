import { AppBar, Box, TextField, Typography, styled } from "@mui/material";

export const HeaderMainBox = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
}));

export const HeaderImg = styled("img")(({ theme }) => ({
  displa: "flex",
  width: "130px",
  height: "36.42px",
  paddingLeft: "33px",
  marginRight: theme.spacing(5),
}));

export const HeaderTextContainer = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  cursor: "pointer",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const HeaderBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    paddingLeft: "35px",
  },
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-start",
  },
}));

export const HeaderTextContain = styled(Typography)(({ theme }) => ({
  width: "100%",
  maxWidth: "432px",
  marginTop: "14.4px",
  color: "#F2F2F2",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export const StyledTextFieldContain = styled(TextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  "& .MuiInputBase-root": {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundImage: "linear-gradient(180deg, #000000b3 10%, #0000)",
  backgroundColor: "transparent",
  boxShadow: "none",
}));
