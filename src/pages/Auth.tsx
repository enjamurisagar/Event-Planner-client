import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FlexAlignCenter from "../libs/FlexAlignCenter";
import FlexCenter from "../libs/FlexCenter";
import Flex from "../libs/Flex";

import Helper from "../helpers";

const Auth = () => {
  const { palette, mode } = Helper();

  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");

  return (
    <FlexAlignCenter
      sx={{
        width: "100%",
        height: "90vh",
      }}
    >
      {authMode === "signup" ? (
        <Box
          width={{ xs: "90%", md: "35%" }}
          height="auto"
          bgcolor={palette.background.alt}
          p={3}
          sx={{
            borderRadius: 3,
            boxShadow: mode === "light" ? "0px 1px 10px" : undefined,
          }}
        >
          {/* logo  */}
          <FlexCenter>Logo</FlexCenter>

          {/* inputs */}
          <Flex
            sx={{
              flexDirection: "column",
              px: { xs: 0, md: 3 },
              my: 2,
              gap: 1.5,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />

            <Button fullWidth variant="contained">
              sign up
            </Button>
            <Flex sx={{ gap: 1 }}>
              Already have an account?{" "}
              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => setAuthMode("login")}
              >
                Log in
              </Typography>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box
          width={{ xs: "90%", md: "35%" }}
          height="auto"
          bgcolor={palette.background.alt}
          p={3}
          sx={{
            borderRadius: 3,
            boxShadow: mode === "light" ? "0px 1px 10px" : undefined,
          }}
        >
          {/* logo  */}
          <FlexCenter>Logo</FlexCenter>

          {/* inputs */}
          <Flex
            sx={{
              flexDirection: "column",
              px: { xs: 0, md: 3 },
              my: 2,
              gap: 1.5,
            }}
          >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />

            <Button fullWidth variant="contained">
              log in
            </Button>
            <Flex sx={{ gap: 1 }}>
              Don't have an account?{" "}
              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => setAuthMode("signup")}
              >
                Sign up
              </Typography>
            </Flex>
          </Flex>
        </Box>
      )}
    </FlexAlignCenter>
  );
};

export default Auth;
