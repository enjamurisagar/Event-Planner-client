import { Box } from "@mui/material";
import React from "react";

interface FlexCenterProps {
  children: React.ReactNode;
  sx?: Object;
}

const FlexCenter = ({ children, sx }: FlexCenterProps) => {
  return (
    <Box display="flex" justifyContent="center" sx={sx}>
      {children}
    </Box>
  );
};

export default FlexCenter;
