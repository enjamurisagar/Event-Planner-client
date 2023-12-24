import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Helper from "../helpers";
import Flex from "../libs/Flex";
import FlexCenter from "../libs/FlexCenter";

//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const { palette } = Helper();
  const location = useLocation();

  const displayRoutes = ["/", "/store"];

  const shouldDisplayFooter = displayRoutes.includes(location.pathname);

  return (
    <Box display={shouldDisplayFooter ? "block" : "none"}>
      <Box
        width="100%"
        height="auto"
        sx={{
          p: 5,
          pb: 8,
          backgroundColor: palette.background.paper,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: "2px 2px 10px",
        }}
      >
        {/* top */}
        <Flex
          sx={{
            justifyContent: "space-around",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box>
            <Typography textAlign="center" variant="h5">
              Contact us?
            </Typography>
            <FlexCenter sx={{ gap: 2, width: "100%" }}>
              <Input
                id="outlined-basic"
                // label="Password"

                sx={{
                  p: 0,
                }}
              />
              <Button variant="outlined">Submit</Button>
            </FlexCenter>
          </Box>
          {/* social */}
          <Flex
            sx={{
              gap: 2,
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstagramIcon
              sx={{
                cursor: "pointer",
                transition: ".5s",
                "&:hover": {
                  color: "pink",
                },
              }}
            />
            <FacebookIcon
              sx={{
                cursor: "pointer",
                transition: ".5s",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
            <MailIcon />
            <GitHubIcon />
          </Flex>
        </Flex>

        {/* middle */}

        <Flex
          sx={{
            width: "80%",
            margin: "2rem auto",
            display: "grid",
            gridTemplateColumns: { xs: undefined, sm: "repeat(3, 1fr)" },
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
            <Typography>Different Links</Typography>
          </Flex>
        </Flex>
        {/* bottom */}
        <Typography
          textAlign="center"
          sx={{
            fontSize: "12px",
            p: 0,
          }}
        >
          &copy; All rights reserved. EVENT PLANNER 2023.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
