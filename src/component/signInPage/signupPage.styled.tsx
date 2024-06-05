import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const SignUpMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(6),
  width: "100%",
  maxWidth: "500px",
}));

export const SignUpFristBox = styled(Box)(() => ({
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

export const SignUpSecBox = styled(Box)(() => ({
  display: "flex",
  marginTop: "21px",
  textAlign: "center",
}));

export const SignUpTextBox = styled(TextField)(() => ({
  display: "flex",
  backgroundColor: "#333",
  width: "100%",
  maxWidth: "404px",
  borderRadius: "5px",
  "& .MuiInputLabel-root": {
    color: "#747474",
  },
}));

export const SignUpButton = styled(Button)(() => ({
  backgroundColor: "#E50914",
  height: "60px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#CE0812",
  },
}));

export const SignUpSecButton = styled(Button)(() => ({
  backgroundColor: "#1356c7",
  height: "60px",
  marginTop: "7.5px",
  border: "2px solid transparent",
  "&:hover": {
    borderColor: "#ffffff",
  },
}));

export const SignUpImg = styled("img")(() => ({
  marginRight: "9px",
  height: "22.5px",
  width: "22.5px",
}));

export const StyledBackgroundBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url('https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_auth_bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const SignUPTextTitle = styled(Typography)(() => ({
  fontWeight: 700,
  color: "#f2f2f2",
}));

export const SignUPSubTextTitle = styled(Typography)(() => ({
  color: "#E50914",
  fontWeight: 600,
  textTransform: "none",
}));

export const SignUPBox = styled(Box)(() => ({
  display: "flex",
  paddingTop: "12px",
}));

export const SignUPSubSignupText = styled(Typography)(() => ({
  color: "#f2f2f2",
  textTransform: "capitalize",
}));

export const SignUPSubDivider = styled(Divider)(() => ({
  borderColor: "#777",
  margin: "24px",
}));

export const SignUPSubSignupTextTitle = styled(Typography)(() => ({
  textAlign: "center",
  color: "#747474",
}));

export const SignUPSubSignupSpan = styled("span")(() => ({
  color: "#E50914",
  cursor: "pointer",
  fontWeight: 700,
}));

export const SignUPForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "404px",
}));
