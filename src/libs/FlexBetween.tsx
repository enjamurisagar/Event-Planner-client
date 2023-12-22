import { Box } from "@mui/material";
import React from "react";

type FlexBetweenProps = {
  children: React.ReactNode;
  sx?: Object;
};

function FlexBetween({ children, sx }: FlexBetweenProps) {
  return (
    <Box display="flex" justifyContent="space-between" sx={sx}>
      {children}
    </Box>
  );
}

export default FlexBetween;
