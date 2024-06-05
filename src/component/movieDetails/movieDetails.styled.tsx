import {
  Box,
  Button,
  DialogContent,
  Divider,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

export const MovieDetailsMainBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const MovieDetailsFristBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid",
  width: "100%",
  maxWidth: "621px",
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "#181818",
}));

export const MovieDetailsButtonBox = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  color: theme.palette.grey[500],
  zIndex: 1,
}));

export const MovieDetailsImg = styled("img")(() => ({
  height: "100%",
  maxHeight: "344px",
  width: "100%",
  maxWidth: "619px",
  position: "relative",
  borderRadius: "5px",
}));

export const MovieDetailsSecBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  paddingLeft: "24px",
  top: "40%",
  left: "20%",
  transform: "translate(-50%, -50%)",
}));

export const MovieDetailsButton = styled(Button)(() => ({
  backgroundColor: "#E50914",
  height: "42.4px",
  width: "150px",
  padding: "12px 20px",
  textTransform: "capitalize",
  borderRadius: "6px",
  color: "#F2F2F2",
  marginRight: "8px",
}));

export const MovieDetailsIcon = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid",
  borderRadius: "50%",
  width: "35px",
  borderColor: "#fff",
  height: "35px",
  cursor: "hover",
  "&:hover": {
    backgroundColor: "#ccc",
    cursor: "pointer",
  },
}));

export const MovieDetailsThirdBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px 32px",
}));

export const MovieDetailsTextTyprographt = styled(Typography)(() => ({
  fontSize: "24px",
  marginTop: "24px",
  marginBottom: "15px",
  color: "#f2f2f2",
}));

export const MovieDetailsText = styled(Typography)(() => ({
  fontSize: "28px",
  fontWeight: 700,
  color: "#f2f2f2",
}));

export const MovieDetailsSecText = styled(Typography)(() => ({
  marginTop: "15px",
  fontSize: "12px",
  color: "#f2f2f2",
}));

export const MovieDetailsDialogContain = styled(DialogContent)(() => ({
  padding: 0,
}));

export const MovieDetailsDividerContain = styled(Divider)(() => ({
  borderColor: "#777",
  marginTop: "24px",
}));

export const MovieDetailsTypographyContain = styled(Typography)(() => ({
  color: "#DDDDDD",
}));

export const MovieDetailsSpan = styled("span")(() => ({
  color: "#777777",
}));

export const MovieDetailsSecSpan = styled("span")(() => ({
  fontWeight: 700,
}));
