import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./component/registerPage/index";
import SignInPage from "./component/signInPage/index";
import HomePage from "./component/homePage/index";
import theme from "./theme/index.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
