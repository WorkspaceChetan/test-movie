import { Box, Pagination, Stack, Typography, styled } from "@mui/material";

export const UIStyledMovieBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#141414",
  width: "100%",
  px: "100px",
}));

export const MovieListFirstBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(5),
  justifyContent: "center",
}));

export const MovieListSecBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const MovieListThirdBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "230px",
  margin: "10px",
  borderRadius: "5px",
  padding: "10px",
}));

export const MovieListFourdBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid",
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  backgroundColor: "#f2f2f2",
  cursor: "hover",
  color: "#000",
  marginTop: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ccc",
    cursor: "pointer",
  },
}));

export const MovieListFivedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid",
  borderRadius: "50%",
  width: "35px",
  borderColor: "#fff",
  color: "#fff",
  height: "35px",
  cursor: "hover",
  marginTop: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ccc",
    cursor: "pointer",
  },
}));

export const MovieListPaginationdBox = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: "#f2f2f2",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#f2f2f2",
    color: "#141414",
  },
  "& .MuiPaginationItem-root.Mui-selected:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

export const MovieListText = styled(Typography)(() => ({
  display: "flex",
  fontSize: "18px",
  fontWeight: 700,
  color: "#f2f2f2",
  backgroundColor: "#141414",
  margin: "auto",
}));

export const MovieListTitleText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontWeight: 700,
  cursor: "pointer",
  color: "#f2f2f2",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const MovieListSubTitleText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  cursor: "pointer",
  color: "#c7c7c7",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  fontSize: "14px",
}));

export const MovieListStack = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  alignItems: "center",
  marginBottom: theme.spacing(5),
}));

export const MovieListBoxContain = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
}));

export const MovieListImgContain = styled("img")(({ theme }) => ({
  width: "230px",
  borderRadius: "5px",
  cursor: "pointer",
}));
