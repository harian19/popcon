import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react';
import LoginPage from "./pages/LoginPage";
import ReviewPage from "./pages/ReviewPage";
import ItemPage from "./pages/ItemPage";
import LoginSuccessPage from "./pages/LoginSuccessPage";

const darkTheme = 
    createTheme({
      palette: {
        mode:  'dark',
      },
      typography: {
        fontFamily: [
        ].join(',')
      }
    });

function App() {

  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="success" element={<LoginSuccessPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="item" element={<ItemPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
