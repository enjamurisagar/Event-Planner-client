import { Box, Button } from "@mui/material";
import React from "react";

import { CategoriesHomeList } from "../libs/categories";

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
// import Helper from "../helpers";

const HomeCategorySlider = () => {
  // const { isNonMobileScreens, mode, palette } = Helper();
  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: { xs: "3rem", sm: "3.5rem", md: "4rem" }, //NavBar.tsx height ,
        backdropFilter: "blur(10px)",
        py: 0.5,
      }}
    >
      <Box
        width={{ xs: "95%", md: "75%" }}
        sx={{
          zIndex: 100,
          mx: "auto",
          my: "0.5rem",
        }}
      >
        <Marquee pauseOnHover autoFill speed={25} delay={2}>
          {CategoriesHomeList?.map((item, i) => (
            <Link
              to={`/${item?.category}`}
              key={i}
              style={{ margin: "0 10px", zIndex: "-10" }}
            >
              <Button
                variant="outlined"
                sx={{
                  p: 0,
                  fontSize: 12,
                  textTransform: "none",
                }}
              >
                {item?.label}
              </Button>
            </Link>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default HomeCategorySlider;
