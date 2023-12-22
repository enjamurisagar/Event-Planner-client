import React from "react";
import { Routes, Route } from "react-router-dom";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

//pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//helpers
// import Helper from "./helpers";

const App = () => {
  const mode = useSelector((state: any) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode) as any), [mode]);

  // const { dispatch, setMode } = Helper();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
