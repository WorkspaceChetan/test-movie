import { Box, styled } from "@mui/material";

export const HomeMainBox = styled(Box)(() => ({
  display: "flex",
  top: "0px",
  width: "100%",
  position: "fixed",
  zIndex: 1000,
}));

export const HomeSecBox = styled(Box)(() => ({
  display: "flex",
  position: "absolute",
  top: "100px",
  width: "100%",
}));

export const HomeThirdBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
}));

export const HomePageStyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(180deg, #0000, #0e0e0e99, #141414),url('/images/bg-img1.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  width: "100%",
  height: "80vh",
}));
