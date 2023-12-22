import { Box } from "@mui/material";
import React from "react";

type FlexAlignCenterProps = {
  children: React.ReactNode;
  sx?: Object;
};

const FlexAlignCenter = ({ children, sx }: FlexAlignCenterProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems={"center"} sx={sx}>
      {children}
    </Box>
  );
};

export default FlexAlignCenter;
