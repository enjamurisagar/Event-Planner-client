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
import PageNotFound from "./components/PageNotFound";
import FooterMenu from "./components/FooterMenu";

//helpers
// import Helper from "./helpers";

const App = () => {
  const mode = useSelector((state: any) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode) as any), [mode]);

  // const { dispatch, setMode } = Helper();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {/* nav */}
        <Navbar />
        {/* all routes */}
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
        {/* footer */}
        <Footer />

        {/* fixed options */}
        <FooterMenu />
      </Box>
    </ThemeProvider>
  );
};

export default App;
