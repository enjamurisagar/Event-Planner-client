import { Box, Button, IconButton, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Helper from "../helpers";
import FlexBetween from "../libs/FlexBetween";

//icons
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

//libs
// import FlexCenter from "../libs/FlexCenter";
import FlexAlignCenter from "../libs/FlexAlignCenter";
import Flex from "../libs/Flex";
import { useLocation } from "react-router-dom";
import DividerCustom from "./DividerCustom";

const Navbar = () => {
  const { palette, mode, navigate, user, dispatch, setMode } = Helper();

  const [searchToggle, setSearchToggle] = useState<Boolean>(false);
  const [openMenu, setOpenMenu] = useState(false);

  const displayRoutes = ["/", "/store"];

  const location = useLocation();

  const shouldDisplayNav = displayRoutes.includes(location.pathname);

  return (
    <Box
      display={shouldDisplayNav ? "block" : "none"}
      sx={{
        position: "sticky",
        top: 0,

        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <FlexBetween
        sx={{
          width: "100%",
          height: { xs: "3rem", sm: "3.5rem", md: "4rem" },
          borderBottom:
            mode === "dark"
              ? `1px solid ${palette.secondary.light} `
              : `1px solid ${palette.secondary.dark} `,
          // backgroundColor: palette.background.default,

          px: { xs: 1, sm: 5, md: 15 },
          alignItems: "center",
        }}
      >
        <Typography>LOGO image</Typography>
        {/* search in desktop */}
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: { xs: 0, md: "15%" },
            position: "relative",

            opacity: { xs: 0, md: 1 },
            visibility: { xs: "hidden", md: "visible" },

            // backgroundColor: "pink",
          }}
        >
          <Input
            sx={{
              opacity: searchToggle ? 1 : 0,
              width: searchToggle ? "100%" : 0,
              transition: ` ${searchToggle ? 1 : 0} 0.3s ease, ${
                searchToggle ? "100%" : 0
              } 0.3s ease`,
              transitionDelay: "0.25s",
              // transition: "ease-in-out 2.5s",
            }}
          />

          <SearchIcon
            onClick={() => setSearchToggle(!searchToggle)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: palette.primary.main,
              },
              position: "absolute",
              right: !searchToggle ? "50%" : 0,
              transition: "0.25s",
              // transitionDelay: "0.25s",
            }}
          />
        </Box>
        {/* location and user and switch DESKTOP*/}
        <FlexAlignCenter
          sx={{
            gap: 3,
            opacity: { xs: 0, md: 1 },
            visibility: { xs: "hidden", md: "visible" },
            width: { xs: 0, md: "auto" },
          }}
        >
          {/* mode switch */}
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon sx={{ color: "#000" }} />
            )}
          </IconButton>
          {/* location */}
          <Flex sx={{ gap: 1 }}>
            <Typography>Ex: Hyderabad</Typography>
            <LocationOnIcon
              sx={{
                fontSize: 20,
              }}
            />
          </Flex>
          {/* user */}
          <IconButton
            sx={{ border: `1px solid ${palette.secondary.dark}` }}
            onClick={() => navigate("/auth")}
          >
            <PersonIcon
              sx={{
                fontSize: 20,
                color: mode === "light" ? "#000" : "#fff",
              }}
            />
          </IconButton>
        </FlexAlignCenter>

        {/* ham burger */}
        <IconButton
          sx={{
            display: {
              xs: "block",
              md: "none",
              color: openMenu ? palette.primary.main : undefined,
            },
          }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MenuIcon sx={{}} />
        </IconButton>
      </FlexBetween>

      {/* mobile-nav */}
      <Box
        display={{ xs: "flex", md: "none" }}
        flexDirection={"column"}
        alignItems={"center"}
        width="100%"
        sx={{
          opacity: openMenu ? 1 : 0,
          visibility: openMenu ? "visible" : "hidden",
          height: openMenu ? "auto" : 0,
          transition: "0.25s",
          borderBottom:
            mode === "dark"
              ? `1px solid ${palette.secondary.light} `
              : `1px solid ${palette.secondary.dark} `,
          gap: 1.5,
          p: openMenu ? 2 : 0,
          zIndex: 1,
        }}
      >
        {/* search */}
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: "85%",
            position: "relative",

            // backgroundColor: "pink",
          }}
        >
          <Input
            sx={{
              opacity: searchToggle ? 1 : 0,
              width: searchToggle ? "100%" : 0,
              transition: ` ${searchToggle ? 1 : 0} 0.3s ease, ${
                searchToggle ? "100%" : 0
              } 0.3s ease`,
              transitionDelay: "0.25s",
              // transition: "ease-in-out 2.5s",
            }}
          />

          <SearchIcon
            onClick={() => setSearchToggle(!searchToggle)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: palette.primary.main,
              },
              position: "absolute",
              right: !searchToggle ? "50%" : 0,
              transition: "0.25s",
              // transitionDelay: "0.25s",
            }}
          />
        </Box>

        <DividerCustom orientation="horizontal" />

        {/* location */}
        <FlexAlignCenter sx={{ gap: 3 }}>
          <Flex sx={{ gap: 1 }}>
            <Typography>Your location Ex: Hyderabad</Typography>
            <LocationOnIcon
              sx={{
                fontSize: 20,
              }}
            />
          </Flex>
        </FlexAlignCenter>
        <DividerCustom orientation="horizontal" />
        {/* user */}
        <Box
          display={"flex"}
          sx={{ alignItems: "center", gap: 1, cursor: "pointer" }}
          onClick={() => navigate("/auth")}
        >
          {user && (
            <IconButton sx={{ border: `1px solid ${palette.secondary.dark}` }}>
              <PersonIcon
                sx={{
                  fontSize: 20,
                }}
              />
            </IconButton>
          )}
          <Button variant="outlined">Login/Register</Button>
        </Box>
        <DividerCustom orientation="horizontal" />
        {/* mode switch */}
        <IconButton onClick={() => dispatch(setMode())}>
          {mode === "dark" ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon sx={{ color: "#000" }} />
          )}
        </IconButton>
        <DividerCustom orientation="horizontal" />
        <Typography>sdvsdf</Typography>
        <DividerCustom orientation="horizontal" />
        <Typography>sdvsdf</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
