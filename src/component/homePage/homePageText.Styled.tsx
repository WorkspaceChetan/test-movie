import { Box, Button, Typography, styled } from "@mui/material";

export const HomePageMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "80px",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "57.6px",
  },
}));

export const HomePageButton = styled(Button)(() => ({
  backgroundColor: "#E50914",
  height: "42.4px",
  width: "150px",
  marginTop: "30px",
  padding: "12px 20px",
  textTransform: "capitalize",
  borderRadius: "6px",
  color: "#F2F2F2",
  marginRight: "8px",
}));

export const HomePageSecButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6D6D6EB3",
  height: "42.4px",
  width: "150px",
  marginTop: "30px",
  padding: "12px 20px",
  textTransform: "capitalize",
  borderRadius: "6px",
  color: "#F2F2F2",
  marginRight: theme.spacing(1),
}));

export const HomePageTextBox = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#F2F2F2",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
}));
