import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const RegisterPageMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(6),
}));

export const RegisterPageFirstBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  maxWidth: "500px",
  backgroundColor: "#030303bf",
  borderRadius: "8px",
  zIndex: 2,
  padding: "60px 48px",
  opacity: 5,
}));

export const RegisterPageFirstText = styled(TextField)(() => ({
  display: "flex",
  backgroundColor: "#333",
  width: "100%",
  maxWidth: "404px",
  height: "100%",
  borderRadius: "5px",
  opacity: 1,
  "& .MuiInputLabel-root": {
    color: "#747474",
  },
}));

export const RegisterPageSecText = styled(TextField)(() => ({
  display: "flex",
  backgroundColor: "#333",
  width: "100%",
  maxWidth: "404px",
  height: "100%",
  borderRadius: "5px",
  "& .MuiInputLabel-root": {
    color: "#747474",
  },
}));

export const RegisterPageButton = styled(Button)(() => ({
  backgroundColor: "#E50914",
  height: "60px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#CE0812",
  },
}));

export const RegisterPageText = styled(Typography)(() => ({
  fontWeight: 700,
  color: "#f2f2f2",
}));

export const RegisterPageSecBox = styled(Box)(() => ({
  display: "flex",
  marginTop: "21px",
  textAlign: "center",
}));

export const RegisterPageTextTitle = styled(Typography)(() => ({
  fontWeight: 500,
  color: "#E50914",
  textTransform: "none",
}));

export const RegisterPageThirdBox = styled(Box)(() => ({
  display: "flex",
  paddingTop: "12px",
}));

export const RegisterPageDividerBox = styled(Divider)(() => ({
  borderColor: "#777",
  margin: "24px",
}));

export const RegisterPageTextLine = styled(Typography)(() => ({
  textAlign: "center",
  color: "#747474",
}));

export const RegisterPageTextSubLine = styled("span")(() => ({
  color: "#E50914",
  cursor: "pointer",
  fontWeight: 700,
}));

export const RegisterPageSubTextLine = styled(Typography)(() => ({
  color: "#f2f2f2",
  textTransform: "capitalize",
}));

export const RegisterPageFormBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "404px",
  height: "100%",
}));

export const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url('https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_auth_bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const RegisterForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "404px",
  height: "100%",
}));
